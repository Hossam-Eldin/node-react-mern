import React from 'react'


const suveryField = ({ input, label}) => {
    //console.log(input)

    return (
                <div>
                    <label>{label}</label>
                     <input {...input} />
                </div>
           )
}

export default suveryField;