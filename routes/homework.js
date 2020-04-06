const get = (req, res) => {
    const homeworks = [
        {
            id: 1,
            name: "Al-Fatiha",
            color: true
        },        
        {
            id: 2,
            name: "Al-Nas",
            color: true
        },
        {
            id: 3,
            name: "Al-Falaq",
            color: true
        },        
        {
            id: 4,
            name: "Al-Ikhlas",
            color: true
        },        
        {
            id: 5,
            name: "Al-Masad",
            color: true
        },        
        {
            id: 6,
            name: "Al-Nasr",
            color: true
        },        
        {
            id: 7,
            name: "Al-Kaferoon",
            color: true
        },        
        {
            id: 8,
            name: "Al-Kawthar",
            color: true
        },        
        {
            id: 9,
            name: "Al-Maoon",
            color: true
        },        
        {
            id: 10,
            name: "Quraish",
            color: true
        },
        {
            id: 11,
            name: "Al-feel",
            color: true
        },
        {
            id: 12,
            name: "Al-Humazah",
            color: true
        },
        {
            id: 13,
            name: "Al-Asr",
            color: true
        }
    ]
    res.render('homework', { homeworks });
}
const post = (req, res) => {
    res.render('home');
}

module.exports = {
    get: get,
    post: post
};