import Note from "./Note";
import "./Notes.css";

const Notes = (props) => {
  // console.log("props", props.notes[0]);
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;
  // console.log(notes[2]);
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};
export default Notes;
