class Tabs {
    constructor(links, body, body_item, active_class) {
        this.id = links
        this.active_class = active_class ? active_class : false
        this.tabs = document.querySelector('#' + this.id).querySelectorAll('a')
        this.blocks = document.querySelector(body).querySelectorAll(body_item)
        this.init()
        this.listener()
    }

    init() {
        this.tabs.forEach((el, i) => {
            if(i>this.blocks.length-1) el.remove()
            el.dataset.tab = this.id + '_' + i
            if (this.active_class)
                if (i === 0) el.classList.add(this.active_class)
        })
        this.blocks.forEach((el, i) => {
            el.id = this.id + '_' + i
            el.style.display = 'none'
            if (i === 0) el.style.display = 'block'
        })
    }

    listener() {
        this.tabs.forEach(el => {
            el.addEventListener('click', () => {
                this.blocks.forEach(e => {
                    e.style.display = 'none'
                    if (this.active_class) e.classList.remove(this.active_class)
                })
                this.tabs.forEach(e => {
                    if (this.active_class) e.classList.remove(this.active_class)
                })
                document.querySelector('#' + el.dataset.tab).style.display = 'block'
                if (this.active_class) el.classList.add(this.active_class)
            })
        })
    }
}


new Tabs('tabs-nav', '.tabs-body', '.tabs-content', '_active')