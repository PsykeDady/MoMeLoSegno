import { useState } from "react";

function preventScrolling() {
	document.getElementsByTagName("body")[0].style="overflow-y:hidden;";
}

function restoreScrolling(){
	document.getElementsByTagName("body")[0].style="";
}


function InsertNoteComponent (props) {

	let [titolo, setTitolo] = useState();
	let [descrizione, setDescrizione] = useState();

	preventScrolling();

	let dismiss = ()=> {
		restoreScrolling(); 
		console.log(props["onDismiss"])
		props["onDismiss"]();
	}
	
	let onAdd = () => {
		restoreScrolling();
		props["onAdd"](titolo,descrizione)
	}

	let onChangeTitolo = (event) => setTitolo(event.target.value)
	
	let onChangeDescrizione = (event) => setDescrizione(event.target.value)

	return <div>
		<div
			className="background-faded" 
			onClick={dismiss}>
		</div>

		<div className="foreground-faded position-absolute top-50 start-50 translate-middle w-75">
			<div className="container background-bg pill-shape">
				<div className="row">
					<div className="col-12 text-center blur-text-primary h3 mt-2">
						Crea una nota
					</div>
					<br />
					<hr className="col-8 offset-2 blur-box-primary"/>
				</div>
				<div className="row p-1">
					<div className="col-12 p-1">
						<input className="form-control" type="text" name="" id="" placeholder="Inserisci titolo nota" onChange={onChangeTitolo} />
					</div>
					<div className="col-12 p-1">
						<textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Inserisci descrizione nota" onChange={onChangeDescrizione}></textarea>
					</div>
					<div className="col-12">
						<div className="float-end">
							<button className="fa fa-plus rounded-button bg-success text-bg blur-box-inactive" onClick={onAdd}>
								
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default InsertNoteComponent;