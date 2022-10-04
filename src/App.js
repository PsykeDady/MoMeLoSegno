import './App.css';
import AddNoteButtonComponent from './components/addnote.component';
import NotaComponent from './components/nota.component';
import NotaModel from './models/nota.model';
import {useState} from "react";
import InsertNoteComponent from './components/insertnote.component';

let id = 2



function App() {

	
	let [notes, setNotes]= useState([
		new NotaModel(0,"La mia nota lunga","Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo Sono un testo molto lungo"),
		new NotaModel(1,"La mia nota corta","testo corto")
	]);

	let [flagInsert,setFlagInsert] = useState(false)

	let  addAudio = (title, description)=>{
		setNotes([...notes, new NotaModel(id++,title,description)])
		setFlagInsert(false)
	}
	
	let  removeNote = (id)=>{
		setNotes(notes.filter(v=>v.id!==id))
	}
	

	let insertNoteModal= flagInsert && <InsertNoteComponent
		onAdd={addAudio}
		onDismiss={()=>{setFlagInsert(false)}}
	></InsertNoteComponent>

	let notesComponent = notes.length>0 ? 
			notes.map(v => <NotaComponent key={v.id} nota={v} onRemoveNote={removeNote}></NotaComponent> )
			: 
				<p 
					className='text-center blur-box-primary m-3 p-4'
				> 
					<span className='fw-bolder'>
						Non ci sono elementi!
					</span>	
					<br></br> <br></br> 
					<small className='text-muted'> (premi il pulsante con il simbolo + in basso per aggiungerne uno) </small>
					<br/>
					<br/>
					<div className='txtMaxMiddle translate-middle float-end text-danger blur-text-accent'>
						&darr;
					</div>
				</p>;
	

  return <div>


	<div className='container-fluid'>
		{notesComponent}
	</div>
	<hr
		className="text-muted col-10 offset-1"
	/>

	<div className='m-3'>
		<AddNoteButtonComponent onAddNote={()=>{window.scroll(0,0);  setFlagInsert(true)}}></AddNoteButtonComponent>
	</div>
		
	{insertNoteModal}

  </div>;
}

export default App;
