

export const getData = async(url) => {
    const data = await fetch(url, {next : { revalidate : 60 }})
    return data.json()
}

