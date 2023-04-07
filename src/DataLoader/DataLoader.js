let data = async() =>{
    let rawData = await fetch('/data.json');
    let useableData = rawData.json();

    return useableData;
}

export {data}