export class PollOption {
    icon: string = ""
    icon_color: string = ""
    title: string = ""
    tags: string[] = []
    active: boolean = false

    constructor(poll_option?: PollOption) {
        if(poll_option) {
            this.icon = poll_option.icon
            this.icon_color = poll_option.icon_color
            this.title = poll_option.title
            this.tags = poll_option.tags
            this.active = poll_option.active
        }
    }
}