import React from 'react'
import Cardbox from './Cardbox'
import Button from './Button'
import Form from './Form'
const Container = () => {

    const data = [{
        title: "VIP elanlar",
        ads: [{
            name: "salvar",
            price: "100"
        }, {
            name: "kofta",
            price: "200"
        }
            , {
            name: "papaq",
            price: "20"
        }
        ]
    }, {
        title: "son elanlar",
        ads: [{
            name: "corab",
            price: "10"
        }, {
            name: "yupqa",
            price: "20"
        }
            , {
            name: "sortik",
            price: "210"
        }
        ]
    }]

    return (
        <div className="container" >
            {/* {
                data.map((item) => (
                    <Cardbox title={item.title} ads={item.ads} />
                ))
            } */}
            <Form/>
        </div>
    )
}

export default Container