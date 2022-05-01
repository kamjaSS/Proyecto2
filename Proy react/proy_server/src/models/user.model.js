const user = {
    name: {
        type: String,
        require: true,
        min:3,
    },
    lastname: {
        type: String,
        require: true,
        min:3,
    },
    password: {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
        require: true,
    },
};