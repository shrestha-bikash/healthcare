import React, { useState } from 'react';
import { Button, List } from 'antd';
import axios from 'axios';

const URL = 'https://cs5500-healthcare.herokuapp.com/v1/'

function ActivitySection() {
    const [rawactivity, setRawActivity] = useState(null);

    const getRawActivity = () => {
        axios.get(URL + 'rawactivity').then(res => {
        console.log('Response: ', res)
        console.log('Data: ', res.data)
        setRawActivity(res.data)
        })
    }
    console.log('rawactivity:', rawactivity)

    return (
        <div className="activity-sec">
            <Button type="primary" onClick={getRawActivity}>
            Get Raw Activity
            </Button>

            {
            rawactivity &&
            <div className="rawactivity">
                {/* {
                rawactivity.map((item, index) =>
                    <div key={index}>
                    <p>{item.time}</p>
                    <p>{item.symptoms}</p>
                    </div>
                )
                } */}
                <List
                bordered
                dataSource={rawactivity}
                itemLayout="vertical"
                renderItem={item => (
                    <List.Item>
                    <p>{item.time}</p>
                    <p>{item.symptoms}</p>
                    </List.Item>
                )}
                />
            </div>
            }
        </div>
    )
}

export default ActivitySection;