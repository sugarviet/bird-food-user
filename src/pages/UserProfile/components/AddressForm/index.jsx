import { Col, Row, Select, Input, Button } from "antd";
import Loading from "../../../../components/Loading/Loading";
import { useGetCities, useGetProvinces } from "../../../../services/Location/services";
import { CloseOutlined } from "@ant-design/icons";
import styles from './AddressCard.module.css'
import { useState } from "react";
import {provinces as defaultProvinces} from './provinces'

function AddressForm( {callback, handleCloseForm} ) {
    const [address, setAddress] = useState('')
    const [province, setProvince] = useState({})
    const [city, setCity] = useState({})
    const [ward, setWard] = useState({})

    const provinces = defaultProvinces
    const [cities, setCities] = useState([])
    const [wards, setWards] = useState([])

    // let {data: provinces, isLoading: isProvincesLoading} = useGetProvinces()
    // let {data: cities, isLoading: isCitiesLoading} = useGetCities(province.id || '/')

    const handleProvinceChange = (value, key) => {
        setProvince({name: value, id: key.key})

        const newCities = provinces.find(p => p.code == key.key).districts
        setCities(newCities)
    }

    const handleCityChange = (value, key) => {
        setCity({name: value, id: key.key})

        const newWards = provinces.find(p => p.code == province.id)
                                    .districts.find(d => d.code == key.key).wards

        setWards(newWards)
    }

    const handleWardChange = (value, key) => {
        setWard({name: value, id: key.key})
    }

    const handleSubmit = () => {
        callback(
            {
                address, 
                province_name: province.name, 
                district_name: city.name, 
                ward_name: ward.name,
                isDefault: false
            }
        )
        handleCloseForm()
    }

    // if(isProvincesLoading || isCitiesLoading) return <Loading/>

    return (  
        <div className={`${styles.overlay}`}>
            <div className={`${styles.wrapper}`}>
                <Row gutter={8}>
                    <Col span={24} style={{margin: '1rem 0'}}>
                        <Input
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Col>
                    <Col span={8} style={{margin: '1rem 0'}}>
                        <Select
                            style={{
                              width: '100%',
                            }}
                            placeholder="Select a province"
                            value={province.name}
                            onChange={handleProvinceChange}
                            options={provinces.map((province) => ({
                              key: province.code,
                              label: province.name,
                              value: province.name,
                            }))}
                        />
                    </Col>
                    <Col span={8} style={{margin: '1rem 0'}}>
                        <Select
                                style={{
                                  width: '100%',
                                }}
                                value={city.name}
                                placeholder="Select a city"
                                onChange={handleCityChange}
                                options={cities.map((city) => ({
                                  key: city.code,
                                  label: city.name,
                                  value: city.name,
                                }))}
                        />
                    </Col>
                    <Col span={8} style={{margin: '1rem 0'}}>
                        <Select
                            style={{
                              width: '100%',
                            }}
                            placeholder="Select a ward"
                            value={ward.name}
                            onChange={handleWardChange}
                            options={wards.map((ward) => ({
                              key: ward.code,
                              label: ward.name,
                              value: ward.name,
                            }))}
                        />
                    </Col>
                </Row>

                <Button onClick={handleSubmit} type="primary">Add Address</Button>
                <button onClick={handleCloseForm} className={`${styles.closeButton}`}><CloseOutlined /></button>
            </div>
        </div>
    );
}

export default AddressForm;