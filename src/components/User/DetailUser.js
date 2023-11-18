import { useEffect, useSate } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Spin } from 'antd';
import useFetch from "../../customize/fetch";
import './DetailUser.scss';
import { LoadingOutlined, EditOutlined } from '@ant-design/icons';


const DetailUser = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: dataUser, isLoading: loading } = useFetch(`https://reqres.in/api/users/${id}`);
    const handleBack = () => {
        navigate('/users');
    }
    return (
        <div className="detailuser-container">
            {loading === false ?
                <div >
                    <div>Hello world from detail user with id: {id}</div>
                    <div>User's name: {dataUser.first_name} {dataUser.last_name}</div>
                    <div>Gmail: {dataUser.email} </div>
                    <div>
                        <img src={dataUser.avatar} style={{ height: '300px', width: '300px', borderRadius: '6px' }} />
                    </div>
                    <Button className="mt-3" onClick={handleBack}>Back</Button>
                </div>
                :
                <div>
                    <span>Loading...</span>
                    <Spin

                        indicator={

                            <LoadingOutlined
                                style={{
                                    fontSize: 24,
                                }}
                                spin
                            />
                        }
                    />
                </div>
            }
        </div>
    )

}

export default DetailUser;