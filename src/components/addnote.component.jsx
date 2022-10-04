function AddNoteButtonComponent (props) {
 return <button 
			onClick={props["onAddNote"]}
			style={{
				backgroundColor:"darkmagenta",
				border:"none"
			}}
 			className="fa fa-plus rounded-circle text-bg float-end m-4 p-4 blur-box-inactive">
		
	</button>
} export default AddNoteButtonComponent;

