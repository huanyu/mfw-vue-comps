<template>
    <div v-html="content">
    </div>
</template>
<script>
    // 全局定义计时器
    let timer
    let cd = 0
    export default {
        name: 'CDLabel',
        data () {
            return {
                content: ''
            }
        },
        props: {
            time: {
                type: Number,
                default: 0
            },
            format: {
                type: String,
                default: '{d} {h}:{m}:{s}'
            }
        },
        watch: {
            // 监控时间
            time () {
                cd = this.time
                if (timer != null) {
                    clearInterval(timer)
                    timer = null
                }
                this.startTimer()
            }
        },
        beforeDestroy () {
            if (timer != null) {
                clearInterval(timer)
                timer = null
            }
        },
        mounted () {
            cd = this.time
            this.startTimer()
        },
        methods: {
            startTimer () {
                if (this.time >= 0) {
                    this.formatTime(cd)
                    if (this.time > 0) {
                        this.countdown()
                    }
                }

            },
            countdown () {
                let self = this
                let timer = setInterval(function () {
                    if (cd >= 0) {
                        self.formatTime(cd)
                    } else {
                        clearInterval(timer)
                        self.$emit('over')
                    }
                    cd--
                }, 1000)
            },
            formatTime (seconds) {
                let day = Math.floor(seconds / (3600 * 24))
                let hour = Math.floor((seconds - day * 3600 * 24) / 3600)
                let min = Math.floor((seconds - day * 3600 * 24 - hour * 3600) / 60)
                let sec = Math.floor(seconds - day * 3600 * 24 - hour * 3600 - min * 60)
                day = day < 10 ? '0' + day : day
                hour = hour < 10 ? '0' + hour : hour
                min = min < 10 ? '0' + min : min
                sec = sec < 10 ? '0' + sec : sec
                this.content = this.format.replace('{d}', day).replace('{h}', hour).replace('{m}', min).replace('{s}', sec)
            }
        }
    }
</script>
