const data = {
    currentUser: {
        Image: {
            png: "./avatar.jpeg",
            webp: "./avatar.webp",
        },
        username: "juliussomo",
    },
    comments: [
        {
            parent: 0,
            id: 1,
            content: "Impressive though it seems the drag feature could be improved ",
            createdAt: "1 month ago",
            score: 12,
            user: {
                image: {
                    png: "./avatar.jpeg",
                    webp: "./avatar.webp",
                },
                username: 'amyrobson',
            },
            replies: [],
        },
        {
            parent: 0,
            id: 2,
            content: "Woah, your project looks awesome! How long you have been coding for I'm still new ",
            createdAt: "2 weeks ago",
            score: 5,
            user: {
                image: {
                    png: "./avatar.jpeg",
                    webp: "./avatar.webp",
                },
                username: 'maxblagun',
            },
            replies: [
                {
                    parent: 2,
                    id: 1,
                    content: "if you are still now ",
                    createdAt: "1 week ago",
                    score: 4,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: "./avatar.jpeg",
                            webp: "./avatar.webp",
                        },
                        username: 'ramsesmiron',
                    },
                },
                {
                    parent: 2,
                    id: 1,
                    content: "I couldn't agree more with this",
                    createdAt: "2 days ago",
                    score: 2,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: "./avatar.jpeg",
                            webp: "./avatar.webp",
                        },
                        username: 'ramsesmiron',
                    },
                },
            ],
        },
    ],
};

function appendFrag(frag, parent){
    let children = [].slice.call(frag.childNodes,0);
    parent.appendChild(frag);
    return children[0];
}