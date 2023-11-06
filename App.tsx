import React, { useState, useRef } from 'react';
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [submittext, setSubmittedTexts] = useState([]);
  const [showSubmittedView, setShowSubmittedView] = useState(false);
  const [edit, setEdit] = useState(null);
  const [editedValue, setEditedValue] = useState([]);
  const keyValue = useRef(0);

  console.log("getresponse====>", submittext);

  const onSubmit = () => {
    if (text) {

      if (edit !== null) {
        const updatedTexts = [...submittext];
        updatedTexts[edit].value = editedValue;
        setEditedValue([])
        setSubmittedTexts(updatedTexts);
        setEdit(null);
      } else {
        const newValue = { key: keyValue.current, value: text };
        keyValue.current += 1;
        setSubmittedTexts([...submittext, newValue]);
      }
      setShowSubmittedView(true);
    }
  };


  const onEdit = (index) => {
    if (index >= 0) {
      setEditedValue(submittext[index].value);
    }
  }

  const onDelete = (index) => {
    const deleteTexts = submittext.filter((_, i) => i !== index);
    setSubmittedTexts(deleteTexts);
  }


  return (
    <View style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={text}
          onChangeText={(text) => {
            setText(text)
          }}
          placeholder='Type your message'
          style={{ width: 150, borderWidth: 1, borderRadius: 10, marginHorizontal: 10, padding: 5 }} />

        <Pressable style={{ borderWidth: 1, width: 100, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "grey", padding: 9 }} onPress={onSubmit} >
          <Text style={{ color: "white" }}>Submit</Text>
        </Pressable>
      </View>

      {
        showSubmittedView && submittext.map((item, index) => (
          < View key={item.key} style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>{index}</Text>
            <View style={{ padding: 5, width: 150, borderRadius: 10, marginHorizontal: 10 }}>
              <TextInput
                value={edit === index ? editedValue : item.value}
                onChangeText={(newText) => {
                  if (edit === index) {
                    setEditedValue(newText);
                  } else {
                    const updatedTexts = [...submittext];
                    updatedTexts[index].value = newText;
                    setSubmittedTexts(updatedTexts);
                  }
                }}

                style={{ borderWidth: 1, width: 150, borderRadius: 10, padding: 9 }}
              />

            </View>

            <Pressable style={{ borderWidth: 1, padding: 5, borderRadius: 10 }} onPress={() => onEdit(index)}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable style={{ borderWidth: 1, borderRadius: 10, marginHorizontal: 10 }} onPress={() => onDelete(index)}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        ))
      }
    </View >
  );
}

export default App;


// import React, { useState } from 'react';
// import {
//   Alert,
//   Pressable,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// function App(): JSX.Element {
//   const [inputText, setInputText] = useState('');
//   const [submittext, setSubmittedTexts] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState('');

//   console.log("response===>", submittext);

//   const onSubmit = () => {
//     if (inputText) {
//       if (editIndex !== null) {
//         const updatedTexts = [...submittext];
//         updatedTexts[editIndex] = inputText;
//         setSubmittedTexts(updatedTexts);
//         setEditIndex(null);
//       } else {
//         setSubmittedTexts([...submittext, inputText]);
//       }
//       setInputText('');
//       // setEditText('');
//     }
//   };

//   const onEdit = (index) => {
//     setEditIndex(index);
//     setEditText(submittext[index]);
//     setSubmittedTexts
//   }

//   const onDelete = (index) => {
//     const deleteTexts = submittext.filter((_, i) => i !== index);
//     setSubmittedTexts(deleteTexts)
//   }

//   return (
//     <View style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
//       <View style={{ flexDirection: "row" }}>
//         <TextInput
//           value={inputText}
//           onChangeText={setInputText}
//           placeholder='Type your message'
//           style={{ width: 150, borderWidth: 1, borderRadius: 10, marginHorizontal: 10, padding: 0 }} />
//         <Pressable style={{ borderWidth: 1, width: 100, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "grey", padding: 9 }} onPress={onSubmit} >
//           <Text style={{ color: "white" }}>Submit</Text>
//         </Pressable>
//       </View>

//       {
//         submittext.map((item, index) => (
//           < View key={index} style={{ flexDirection: 'row', padding: 10 }}>
//             <Text>{index}</Text>
//             <View style={{ padding: 5, width: 150, borderRadius: 10, marginHorizontal: 10 }}>

//               <TextInput
//                 value={index === editIndex ? editText : item}
//                 onChangeText={(text) => {
//                   if (editIndex === index) {
//                     setEditText(text)
//                   }
//                 }}
//                 style={{ borderWidth: 1, width: 150, borderRadius: 10, padding: 9 }}
//               />
//             </View>

//             <Pressable style={{ borderWidth: 1, padding: 5, borderRadius: 10 }} onPress={() => onEdit(index)}>
//               <Text>Edit</Text>
//             </Pressable>

//             <Pressable style={{ borderWidth: 1, padding: 2, borderRadius: 10, marginHorizontal: 10 }} onPress={() => onDelete(index)}>
//               <Text>Delete</Text>
//             </Pressable>
//           </View>
//         ))
//       }
//     </View >
//   );
// }
// export default App;

{/* <TextInput
                  value={edit === index ? editedValue : item.value}
                  onChangeText={(newText) => {
                    if (edit === index) {
                      setEditedValue(newText);
                    }
                  }}
                  style={{ borderWidth: 1, width: 150, borderRadius: 10, padding: 9 }}
                /> */}



















