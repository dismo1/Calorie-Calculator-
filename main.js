function getInputValue() {
  let name = document.getElementById('name').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let age = document.getElementById('age').value;
  let sport = document.getElementById('sport').value;
  let values = [weight, height, age];
  let mCal = (10 * values[0]) + (6.25 * values[1]) - (5 * values[2]) + 5;
  let fCal = (10 * values[0]) + (6.25 * values[1]) - (5 * values[2]) - 161;
  switch (sport) {
    case 'خامل (لا اقوم بأي رياضة)' :
      mCal = mCal * 1.25;
      fCal = fCal * 1.25;
      if (document.getElementById('male').checked) {
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزي دب الباندا ${name} سعراتك الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انت تريد تضعف فأكل ${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تريد تسمن فأكل ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزي الدب اذا كنت تريد ان تزيد وزنك فيجب ان تأكل اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لك يعني مو تضل تضرب باجة وتشريب وقيمة يومية عود حتى تسمن لا حبي لا هذا اكل مو صحي واذا ضليت هيج راح تصير عندك سمنة مفرطة وماراح تسسطر على وزنك اما اذا كنت تريد تضعف فأكل بحسب السعرات الحرارية التي اعطيتها لك ولا تنقص اكثر لأن اذا نقصت اكثر راح تدخل بحالة المجاعة واذا دخلت بحالة المجاعة انسى شي اسمة نزول.وزن`);
      document.write(`</div>`);
      
  } if (document.getElementById('female').checked) {
    
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزتي دبة الباندا ${name} سعراتكِ الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انتِ تردين تضعفين فأكلي${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تردين تسمنين فأكلي ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزتي الدبة اذا كنتِ تريدين ان تزيدين وزنكِ فيجب ان تأكلي اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لكِ يعني مو تضلين تضربين باجة وتشريب وقيمة يومية عود حتى تسمنين لا يابة لا هذا اكل مو صحي واذا ضليتي هيج راح تصير عندچ سمنة مفرطة وماراح تسطرين على وزنچ اما اذا كنتِ تريدين تضعفين فأكلي بحسب السعرات الحرارية التي اعطيتها لكِ ولا تنقصين اكثر لأن اذا نقصتي اكثر راح تدخلين بحالة المجاعة واذا دخلتي بحالة المجاعة انسي شي اسمة نزول وزن`);
      document.write(`</div>`);
  } else {
    document.getElementById('error').innerHTML ='رجاءً قم بأختيار جنسك'
  }
  break;
  
    case 'ضعيف (اقوم بعمل الرياضة من 1-3 في الاسبوع)' :
      mCal = mCal * 1.375;
      fCal = fCal * 1.375;
      
      if (document.getElementById('male').checked) {
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزي دب الباندا ${name} سعراتك الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انت تريد تضعف فأكل ${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تريد تسمن فأكل ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزي الدب اذا كنت تريد ان تزيد وزنك فيجب ان تأكل اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لك يعني مو تضل تضرب باجة وتشريب وقيمة يومية عود حتى تسمن لا حبي لا هذا اكل مو صحي واذا ضليت هيج راح تصير عندك سمنة مفرطة وماراح تسسطر على وزنك اما اذا كنت تريد تضعف فأكل بحسب السعرات الحرارية التي اعطيتها لك ولا تنقص اكثر لأن اذا نقصت اكثر راح تدخل بحالة المجاعة واذا دخلت بحالة المجاعة انسى شي اسمة نزول.وزن`);
      document.write(`</div>`);
      
  } if (document.getElementById('female').checked) {
    
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزتي دبة الباندا ${name} سعراتكِ الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انتِ تردين تضعفين فأكلي${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تردين تسمنين فأكلي ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزتي الدبة اذا كنتِ تريدين ان تزيدين وزنكِ فيجب ان تأكلي اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لكِ يعني مو تضلين تضربين باجة وتشريب وقيمة يومية عود حتى تسمنين لا يابة لا هذا اكل مو صحي واذا ضليتي هيج راح تصير عندچ سمنة مفرطة وماراح تسطرين على وزنچ اما اذا كنتِ تريدين تضعفين فأكلي بحسب السعرات الحرارية التي اعطيتها لكِ ولا تنقصين اكثر لأن اذا نقصتي اكثر راح تدخلين بحالة المجاعة واذا دخلتي بحالة المجاعة انسي شي اسمة نزول وزن`);
      document.write(`</div>`);
  } else {
    document.getElementById('error').innerHTML ='رجاءً قم بأختيار جنسك'
  }
  break;
  
  case 'متوسط (اقوم ب 3-5 مرات في الاسبوع' :
      mCal = mCal * 1.550;
      fCal = fCal * 1.550;
      
      if (document.getElementById('male').checked) {
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزي دب الباندا ${name} سعراتك الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انت تريد تضعف فأكل ${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تريد تسمن فأكل ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزي الدب اذا كنت تريد ان تزيد وزنك فيجب ان تأكل اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لك يعني مو تضل تضرب باجة وتشريب وقيمة يومية عود حتى تسمن لا حبي لا هذا اكل مو صحي واذا ضليت هيج راح تصير عندك سمنة مفرطة وماراح تسسطر على وزنك اما اذا كنت تريد تضعف فأكل بحسب السعرات الحرارية التي اعطيتها لك ولا تنقص اكثر لأن اذا نقصت اكثر راح تدخل بحالة المجاعة واذا دخلت بحالة المجاعة انسى شي اسمة نزول.وزن`);
      document.write(`</div>`);
      
  } if (document.getElementById('female').checked) {
    
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزتي دبة الباندا ${name} سعراتكِ الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انتِ تردين تضعفين فأكلي${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تردين تسمنين فأكلي ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزتي الدبة اذا كنتِ تريدين ان تزيدين وزنكِ فيجب ان تأكلي اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لكِ يعني مو تضلين تضربين باجة وتشريب وقيمة يومية عود حتى تسمنين لا يابة لا هذا اكل مو صحي واذا ضليتي هيج راح تصير عندچ سمنة مفرطة وماراح تسطرين على وزنچ اما اذا كنتِ تريدين تضعفين فأكلي بحسب السعرات الحرارية التي اعطيتها لكِ ولا تنقصين اكثر لأن اذا نقصتي اكثر راح تدخلين بحالة المجاعة واذا دخلتي بحالة المجاعة انسي شي اسمة نزول وزن`);
      document.write(`</div>`);
  } else {
    document.getElementById('error').innerHTML ='رجاءً قم بأختيار جنسك'
  }
  break;
  case 'متمرس(امارس الرياضة يومياً)' :
      mCal = mCal * 1.725;
      fCal = fCal * 1.725;
      
      if (document.getElementById('male').checked) {
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزي دب الباندا ${name} سعراتك الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انت تريد تضعف فأكل ${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تريد تسمن فأكل ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزي الدب اذا كنت تريد ان تزيد وزنك فيجب ان تأكل اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لك يعني مو تضل تضرب باجة وتشريب وقيمة يومية عود حتى تسمن لا حبي لا هذا اكل مو صحي واذا ضليت هيج راح تصير عندك سمنة مفرطة وماراح تسسطر على وزنك اما اذا كنت تريد تضعف فأكل بحسب السعرات الحرارية التي اعطيتها لك ولا تنقص اكثر لأن اذا نقصت اكثر راح تدخل بحالة المجاعة واذا دخلت بحالة المجاعة انسى شي اسمة نزول.وزن`);
      document.write(`</div>`);
      
  } if (document.getElementById('female').checked) {
    
      document.write(`<div style="direction: rtl;">`);
      document.write(`<h2>عزيزتي دبة الباندا ${name} سعراتكِ الحرارية هي ${mCal}</h2>`);
      document.write(`<h4>اذا انتِ تردين تضعفين فأكلي${mCal - 350} سعرة حرارية باليوم</h4>`);
      document.write(`<h4>واما اذا تردين تسمنين فأكلي ${mCal + 350} سعرة حرارية باليوم </h4>`);
      document.write(`</br>`);
      document.write(`ملاحظة عزيزتي الدبة اذا كنتِ تريدين ان تزيدين وزنكِ فيجب ان تأكلي اكل صحي بحسب عدد السعرات الحرارية التي اعطيتها لكِ يعني مو تضلين تضربين باجة وتشريب وقيمة يومية عود حتى تسمنين لا يابة لا هذا اكل مو صحي واذا ضليتي هيج راح تصير عندچ سمنة مفرطة وماراح تسطرين على وزنچ اما اذا كنتِ تريدين تضعفين فأكلي بحسب السعرات الحرارية التي اعطيتها لكِ ولا تنقصين اكثر لأن اذا نقصتي اكثر راح تدخلين بحالة المجاعة واذا دخلتي بحالة المجاعة انسي شي اسمة نزول وزن`);
      document.write(`</div>`);
  } else {
    document.getElementById('error').innerHTML ='رجاءً قم بأختيار جنسك'
  }
  break;
}
}