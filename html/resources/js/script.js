let app = new Vue({
    el: '#v',
    data: {
        title: '',
        blanks: [],
        questions: [
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""},
            {v: ""}
        ],
        value: [],
        aaa: 'something'
    },
    created() {
        this.lib()
    },
    methods: {
        lib() {
            url = "https://madlibz.herokuapp.com/api/random?minlength=3&maxlength=20"
            fetch(url).then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
                this.blanks = json.blanks
                this.value = json.value
                this.title = json.title
            })
            console.log(this.title)
        }
    },
    computed: {
        zipped_answers() {
            console.log("I'm changing because I'm cool")
            let z = ""
            for (let i = 0; i < this.blanks.length; i++) {
                z = z + this.value[i] + " "
                z = z + this.questions[i]["v"] + " "
            }
            z = z + this.value[this.value.length - 2]
            return z
        },
        zipped_questions() {
            let z = []
            for (let i = 0; i < this.blanks.length; i++) {
                z.push({b: this.blanks[i], q: this.questions[i]})
            }
            return z
        },
        filled() {
            for (let i = 0; i < this.blanks.length; i++) {
                if (this.questions[i]["v"] === "") {
                    return false
                }
            }
            return true
        }
    }
})

