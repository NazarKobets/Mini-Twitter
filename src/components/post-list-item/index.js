import React from "react";
import './post-list-item.css';

const PostListItem = (props) => {

	//const [like, setLike] = useState(false);
	//const [important, setImportant] = useState(false);
	
	// useEffect(() => {
	// 	setImportant(props.important);
	// 	console.log('important changes');
	// }, [props.important]);
	const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = props;

	let className = "app-list-item d-flex justify-content-between"; 
	className += important ? ' important' : '';
	className += like ? ' like' : '';

	return (
		<div className={className}>
			<span className="app-list-item-label" onClick={onToggleLiked}>
				{ label }
			</span>
			<div>
				<button onClick={onToggleImportant} className="btn-star btn-sm">
					<i className="fa fa-star"></i>
				</button>
				<button onClick={onDelete} className="btn-trash btn-sm">
					<i className="fa fa-trash-o"></i>
				</button>
				<i className="fa fa-heart"></i>
			</div>
		</div>
	);
}

export default PostListItem;