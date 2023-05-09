export const getData = async (url) => {
    const data = await fetch(url, { next: { revalidate: 55 } })
    return data.json()
}

