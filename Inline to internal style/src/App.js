import "./styles.css";
//create a object to store all the styles.
const styles = {
    form : {
      width: "60%",
      margin: "50px auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    h3 : {
      fontSize: "2rem", letterSpacing: 2 
    },
    input : {
      padding: 10 
    },
    formdiv : {
      display: "flex",
      justifyContent: "center",
      gap: 20
    },
    button : {
        outline: "none",
        paddingBlock: 5,
        width: 100,
        backgroundColor: "red",
        color: "white",
        cursor: "pointer"   
    }

}

export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form style={styles.form}>
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.h3}>Sign Up</h3>
        <input style={styles.input} placeholder="Username" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div style={styles.formdiv}>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
