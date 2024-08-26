import React from "react";

function Disclaimer() {
    return (
        <div>
            <div className="text-4xl font-bold">Mapping Evaluation</div>
            <div>
                <div className="text-2xl mt-4">Descrizione del task</div>
                <p className="mt-2">
                In questa annotazione, ti verrà presentata una frase contenente un verbo e un sostantivo. 
                L'obiettivo è determinare se il sostantivo svolge il ruolo semantico specificato rispetto al verbo indicato.
                </p>
                <p className="mt-2">
                <b>Esempio di Frase:</b>
                </p>

                <p className="mt-2">
                Dato il verbo QUESTION "direct or put; seek an answer to" (SUBJ) MOTHER 
                "a woman who has given birth to a child (also used as a term of address to your mother)", 
                ha il ruolo di AGENT "Actor in an event who initiates and carries out the event intentionally or consciously, 
                and who exists independently of the event." ?
                </p>

                <div className="text-2xl mt-4">Istruzione annotazione</div>
                <p className="mt-2">
                Le risposte possibili sono:
                <ul  className="mt-2 list-decimal">
                    <li>Sì: se il sostantivo svolge il ruolo semantico specificato.</li>
                    <li>No: se il sostantivo non svolge il ruolo semantico specificato.</li>
                    <li>Non sono sicuro: se hai dubbi o non sei certo del ruolo del sostantivo.</li>
                </ul>
                </p>
                <p className="mt-2">
                Se non sei sicuro riguardo a un termine o hai bisogno di chiarimenti, puoi consultare risorse esterne su Internet 
                per ottenere ulteriori informazioni. Assicurati che le tue annotazioni siano basate sulle definizioni fornite 
                e sul loro significato nel contesto della frase.
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;

