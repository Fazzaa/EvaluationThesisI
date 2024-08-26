import React from "react";

function Disclaimer() {
    return (
        <div>
            <div className="text-4xl font-bold">Mapping Evaluation</div>
            <div>
                <div className="text-2xl mt-4">What are you going to do?</div>
                <p className="mt-2">
                    In this annotation task, you will be given a word to evaluate. Your job is
                    to decide whether the word is basic or advanced.
                </p>
                <p className="mt-2">
                    You will need to complete <b>500</b> of these <b>annotations</b>, which should take about <b>30
                    minutes</b>. It's important to note that this task
                    does not evaluate your knowledge of English, so you don't need to worry about being tested. If
                    you need more information about the word, you can use the internet to help
                    you. The goal of this task is simply to help us understand how people classify words as basic or
                    advanced. At any point during the annotation task, you can mark a word as "<i>difficult</i>" if you
                    find it challenging to determine whether it is basic or advanced.
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;
