import { useState, useEffect } from "react"

export default function NASA() {

    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => res.json())
        .then(nasaData => setData(nasaData))
    }, [])

    console.log(data);

    return(
        <div>
            <h1>{data.title}</h1>
            <img src={data.url} alt={data.title} />
            <small>{data.date}</small>
            <p>{data.explanation}</p>
        </div>
    )
}

/*

The res.json() method and JSON.parse() function serve similar purposes but are used in different contexts:

    res.json(): This method is specific to the Response object returned by the fetch() function, which is commonly used to make HTTP requests in JavaScript. res.json() is a method provided by the Response object that parses the response body as JSON and returns a Promise that resolves to the parsed JSON data. It is typically used to extract JSON data from the response received from an API.

    JSON.parse(): This is a built-in JavaScript function that parses a JSON string and converts it into a JavaScript object. It takes a JSON string as input and returns the corresponding JavaScript object. JSON.parse() is not specific to HTTP responses but can be used in various scenarios where you need to convert a JSON string to a JavaScript object.

In summary, the key difference is that res.json() is used specifically with the Response object from the fetch() function to parse the response body as JSON, while JSON.parse() is a general-purpose function for parsing JSON strings into JavaScript objects.


In the context of programming and data manipulation, "parse" refers to the process of analyzing or interpreting data according to a specific structure or format.

When you parse data, you take a raw input (such as a string or a file) and extract the relevant information in a structured manner that can be easily understood and processed by your program.

For example, when parsing JSON data, you take a JSON string and convert it into a corresponding data structure in the programming language you are using (e.g., an object, an array, etc.). This allows you to access and manipulate the data in a meaningful way.

Parsing is commonly used when working with different data formats or protocols, such as XML, CSV, JSON, or even custom data formats. The process typically involves analyzing the input, identifying specific patterns or elements, and extracting the relevant information.

In summary, parsing is the process of analyzing and extracting structured data from a raw input according to a specific format or set of rules. It allows programs to work with data in a more organized and meaningful way.

*/