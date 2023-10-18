import React from 'react'
import Input from './Input'
import Label from './Label'
import Select from './Select';
import Button from './Button';



const Form = () => {

    const data = [
        {
            id: "category",
            options: [{ value: 'ayaqqabi', text: 'ayaqqabi' },
            { value: 'saat', text: 'saat' },
            { value: 'tekstil', text: 'tekstil' }]
        },
        {
            id: "company",
            options: [{ value: "ortaklik", text: "ortaklik" },
            { value: "şahıs", text: "şahıs" },
            { value: "kollektiv şirket", text: "kollektiv şirket" }]
        },
        {
            id: "county",
            options: [{ value: "Adana", text: "Adana" },
            { value: "Ankara", text: "Ankara" },
            { value: "Aksaray", text: "Aksaray" }]
        }
    ]
    return (
        <div className='form'>
            <div className='inputs-wrapper'>
                <div className="form-row">
                    <div className="input-wrap">
                        <Label htmlFor="fullname" text="ADINIZ - SOYADINIZ" className="label" />
                        <div className="content">
                            <Input type="text" className="name" id="fullname" placeholder="Ad Soyad" />
                        </div>
                    </div>
                    <div className="input-wrap">
                        <Label htmlFor="phone" text="CEP TELEFONUNUZ" className="label" />
                        <div className="content">
                            <Input type="text" className="phone-number" id="phone" placeholder="05_ ___ __ __" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-wrap">
                        <Label htmlFor="mail" text="E-POSTA ADRESINIZ" className="label" />
                        <div className="content">
                            <Input type="text" className="e-mail" id="mail" placeholder="E-Posta Adresi" />
                        </div>
                    </div>
                    <div className="input-wrap">
                        <Label htmlFor="category" text="SATILACAK ÜRÜN KATEGORİSİ" className="label" />
                        <div className="content">
                            <Select className="product-category" id="category" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-wrap">
                        <Label htmlFor="company" text="ŞİRKET TÜRÜ" className="label" />
                        <div className="content">
                            <Select className="product-category" id="company" />
                        </div>
                    </div>
                    <div className="input-wrap">
                        <Label htmlFor="VKN" text="VERGI KIMLIK NUMARANIZ" className="label" />
                        <div className="content">
                            <Input type="text" className="e-mail" id="VKN" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-wrap">
                        <Label htmlFor="city" text="IL" className="label" />
                        <div className="content">
                            <Select className="product-category" id="city" />
                        </div>
                    </div>
                    <div className="input-wrap">
                        <Label htmlFor="district" text="ILCE" className="label" />
                        <div className="content">
                            <Select className="product-category" id="district" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-wrap">
                        <Label htmlFor="referancecode" text="REFERANS KODU (ZORUNLU DEGIL)" className="label" />
                        <div className="content">
                            <Select className="ref-code" id="referancecode" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-wrap">
                        <div className="agreement-wrap">
                            <label >
                                <Input type="checkbox"/>
                                <span className='agreement-box'>
                                    <a href="#" className='agreement-link'>Aydınlatma metnini</a>
                                    okudum ve anladım
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="input-wrap">
                        <div className="button-box">
                            <Button className="continue" text="DAVAM ET" type="button"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form