export const students = [
    {
        name : 'Melisa',
        username : 'melisaferrara'
    },
    {
        name : 'Tito',
        username : 'TitoAlcivar'
    },
    {
        name : 'Norman',
        username : 'NormanFerreyra25'
    },
    {
        name : 'Jaime',
        username : 'Jaimejcr'
    },
]

export const getData = async(url) => {
    const data = await fetch(url)
    return data.json()
}