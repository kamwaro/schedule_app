import React from "react";
import {Container} from './styled';
import {Row, Col, Card} from 'antd';
import {connect} from 'react-redux';
import moment from "moment";
import styled from 'styled-components'

const ListSchedules = ({schedules}) => {
    console.log(schedules)
    const formatTime = time => moment(time).format("HH:mm")

    return (
        <Container>
            <Row>
                <Col span={12}>
                    <Header>
                    <h1>Schedules</h1>
                    <a href="/"> Add a new schedule </a>
                    </Header>
                    {
                        schedules.map((schedule, i) => (
                            <Card key={i} title={schedule.title}>
                                <Time>
                                    <p>{formatTime(schedule.time[0])}</p>
                                    <p> --- </p>
                                    <p>{formatTime(schedule.time[1])}</p>

                                </Time>
                                <p>{schedule.description}</p>

                            </Card>
                        ))
                    }
                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = state => (
    {
        schedules:state.schedules
    }
)
const Time = styled.div`
    display: flex;
`
const Header = styled(Time) `
    justify-content: space-between;
`

export default connect(mapStateToProps)(ListSchedules);