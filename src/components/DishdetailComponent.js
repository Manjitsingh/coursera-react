import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

Date.prototype.formatted = function () {
    var options = { month: 'short'};
    let month = Intl.DateTimeFormat('en-US', options).format(this)
    let day = this.getDate()
    let year = this.getFullYear()
    return `${month} ${day}, ${year}`
};

    function RenderDish({dish}) {
        if (dish == null) {
            return ( <div></div> )
        }

        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments == null) {
            return ( <div></div> )
        }

        const commentDetail = comments.comments.map((comment) => {
            const date = new Date(comment.date)
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {date.formatted()}</p>
                </li>
            )
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>{commentDetail}</ul>
            </div>
        )
    }

    const DishDetail = (props) => {
        return (
            <div className="container">
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish} />
                </div>
            </div>
        );
    }

export default DishDetail;