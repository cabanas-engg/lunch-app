export class Poll {
    title: string = "";
    media: {} = {};
    type: "multiple_choice" | "image_poll" | "meeting" | "ranked_choice" = "multiple_choice";
    workspace: {} = {};
    poll_options: TextPollOption[] = [];
    poll_config: PollConfig = new PollConfig();

    constructor(poll?: Poll) {

        if(poll) {
            this.title = poll.title
            if(Array.isArray(poll.poll_options) && poll.poll_options.length) {
                poll.poll_options.forEach((opt: TextPollOption) => {
                    this.poll_options.push(new TextPollOption(opt))
                })
            }
            this.poll_config = poll.poll_config
        }
    }

    addOption(option: TextPollOption): void {
        this.poll_options.push(option)
    }
}

export class TextPollOption {
    id: string = "";
    private type: "text" = "text";
    position: number = 0;
    vote_count: number = 0;
    max_votes: number = 0;
    description: string = "";
    private is_write_in: boolean = false;
    value: string = "";

    constructor(option?: TextPollOption) {
        if(option) {
            this.id = option.id
            this.type = option.type
            this.position = option.position
            this.vote_count = option.vote_count
            this.max_votes = option.max_votes
            this.description = option.description
            this.is_write_in = option.is_write_in
            this.value = option.value
        }
    }
}

export class PollConfig {
    is_private: boolean = true;
    vote_type: string = "default";
    allow_comments: boolean = false;
    allow_indeterminate: boolean = false;
    allow_other_option: boolean = false;
    custom_design_colors: {} = {};
    deadline_at: number = 1649671274;
    duplication_checking: string = "session";
    allow_vpn_users: boolean = false;
    edit_vote_permissions: string = "admin";
    force_appearance: string = "auto";
    hide_participants: boolean = false;
    is_multiple_choice: boolean = true;
    multiple_choice_min: number = 1;
    multiple_choice_max: number = 1;
    number_of_winners: number = 1;
    randomize_options: boolean = false;
    require_voter_names: boolean = false;
    results_visibility: string = "after_vote";
    use_custom_design: boolean = true;


    constructor(config?: PollConfig) {
        if(config) {
            this.is_private = config.is_private;
            this.vote_type = config.vote_type;
            this.allow_comments = config.allow_comments;
            this.allow_indeterminate = config.allow_indeterminate;
            this.allow_other_option = config.allow_other_option;
            this.custom_design_colors = config.custom_design_colors;
            this.deadline_at = config.deadline_at;
            this.duplication_checking = config.duplication_checking;
            this.allow_vpn_users = config.allow_vpn_users;
            this.edit_vote_permissions = config.edit_vote_permissions;
            this.force_appearance = config.force_appearance;
            this.hide_participants = config.hide_participants;
            this.is_multiple_choice = config.is_multiple_choice;
            this.multiple_choice_min = config.multiple_choice_min;
            this.multiple_choice_max = config.multiple_choice_max;
            this.number_of_winners = config.number_of_winners;
            this.randomize_options = config.randomize_options;
            this.require_voter_names = config.require_voter_names;
            this.results_visibility = config.results_visibility;
            this.use_custom_design = config.use_custom_design;
        }
    }



}