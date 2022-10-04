const separator=84

function NotaComponent (props) {

		let nota=props["nota"];

		return <div className="row m-3">
			<div className="col-10 col-md-11 primary-bg pill-shape-left">
				<div className="container">
					<div className="row">
						<div className="col-11">
							<legend className="text-bg">
								{nota.title}
							</legend>
						</div>
					</div>
					<div className="row">
						<div className="col-10 offset-1 inactive-fg small mb-1">
							{nota.description}

						</div>
					</div>
				</div>
			</div>
			<div className="col-2 col-md-1 accent-bg pill-shape-right position-relative handcursor" onClick={()=>{props["onRemoveNote"](nota.id)}}>
				<div className="text-bg txtMaxMiddle position-absolute top-50 start-50 translate-middle">
					&times;
				</div>
			</div>
		</div>
}


export default NotaComponent