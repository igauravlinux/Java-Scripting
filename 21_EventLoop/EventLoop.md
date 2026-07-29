4. Event Loop

Event Loop ka sirf ek kaam hai:

Check karna ki Call Stack khali hai ya nahi.

Agar Call Stack busy hai → Wait karo.
Agar Call Stack empty hai → Callback Queue se callback utha kar Call Stack me bhej do.

Isi process ko Event Loop kehte hain.