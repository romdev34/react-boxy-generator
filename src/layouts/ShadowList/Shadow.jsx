import {useState, useEffect} from "react";
import BoxRange from "../BoxPanel/BoxRange.jsx";
import BoxColorPicker from "../BoxPanel/BoxColorPicker.jsx";
import ShadowRange from "./ShadowRange.jsx";
import ShadowColorPicker from "./ShadowColorPicker.jsx";
import ShadowCheckbox from "./ShadowCheckbox.jsx";
import {removeShadow} from "../../features/shadows.js";
import {useDispatch} from "react-redux";

export default function Shadow({panelNumber,shadow}) {
    const dispatch = useDispatch()

    const [toggleShadow, setToggleShadow] = useState(false)

    useEffect(() => {
        if(panelNumber === 1) {
            setToggleShadow((true))
        }
    }, [])
    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range") {
            return <ShadowRange
                key={index}
                inputData={shadow.inputs[index]}
                shadowID = {shadow.id}
            />
        }
        if(input.type === "color") {
            return <ShadowColorPicker
                key={index}
                inputData={shadow.inputs[index]}
                shadowID = {shadow.id}
            />
        }
    })
    return (
        <li className="bg-gray-50 border-b border-gray-300">
            <button
                className="px-6 py-4 flex justify-between items-center hover:bg-gray-100"
                onClick={() => setToggleShadow(!toggleShadow)}
            >
                <span>Shadow {panelNumber}</span>
                <span> <br/> &gt; </span>
            </button>
            {toggleShadow &&
            <>
                <div className="flex items-end px-6 pt-4">
                    <ShadowCheckbox name={"active"} shadowID={shadow.id} />
                    <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
                    <button
                        onClick={() => dispatch(removeShadow(shadow.id))}
                        className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                        Remove
                    </button>
                </div>
                <div className="px-6 py-4">
                    {shadowInputs}
                </div>
            </>
            }
        </li>
    )
}
