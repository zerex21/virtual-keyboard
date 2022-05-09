function renderEnBoard(type) {
  return (` 
    <textarea name="inputText" id="textArea" cols="106" rows="10" inputmode="text"></textarea>
    <div class="cable">
    </div>
    <div class="keyboard">
        <div class="section-a">
            <div class="key num dual letRU">
                ~<br>
            </div>
            <div class="key num dual " id='shiftRus'>
                !<br>1
            </div>
            <div class="key num dual " id='shiftRus'>
                @<br>2
            </div>
            <div class="key num dual" id='shiftRus'>
                #<br>3
            </div>
            <div class="key num dual " id='shiftRus'>
                $<br>4
            </div>
            <div class="key num dual " id='shiftRus'>
                %<br>5
            </div>
            <div class="key num dual " id='shiftRus'>
                ^<br>6
            </div>
            <div class="key num dual " id='shiftRus'>
                &<br>7
            </div>
            <div class="key num dual " id='shiftRus'>
                *<br>8
            </div>
            <div class="key num dual " id='shiftRus'>
                (<br>9
            </div>
            <div class="key num dual " id='shiftRus'>
                )<br>0
            </div>
            <div class="key num dual " id='shiftRus'>
                _<br>-
            </div>
            <div class="key num dual " id='shiftRus'>
                +<br>=
            </div>
            <div class="key backspace">
                Backspace
            </div>
            

            <div class="key tab">
                Tab
            </div>

            <div class="key letter letRU">
                Q
            </div>
            <div class="key letter letRU">
                W
            </div>
            <div class="key letter letRU">
                E
            </div>
            <div class="key letter letRU">
                R
            </div>
            <div class="key letter letRU">
                T
            </div>
            <div class="key letter letRU">
                Y
            </div>
            <div class="key letter letRU">
                U
            </div>
            <div class="key letter letRU">
                I
            </div>
            <div class="key letter letRU">
                O
            </div>
            <div class="key letter letRU">
                P
            </div>
            <div class="key dual letRU">
                {<Br>[
            </div>
            <div class="key dual letRU">
                }<br>]
            </div>
            <div class="key letter dual slash " id='shiftRus'>
                |<br>\
            </div>
            <div class="key del">
            Del
            </div>
            <div class="key capsLock">
                Caps<br>Lock
            </div>
            <div class="key letter letRU">
                A
            </div>
            <div class="key letter letRU">
                S
            </div>
            <div class="key letter letRU">
                D
            </div>
            <div class="key letter letRU">
                F
            </div>
            <div class="key letter letRU">
                G
            </div>
            <div class="key letter letRU">
                H
            </div>
            <div class="key letter letRU">
                J
            </div>
            <div class="key letter letRU">
                K
            </div>
            <div class="key letter letRU">
                L
            </div>
            <div class="key dual letRU">
                :<br>;
            </div>
            <div class="key dual letRU">
                "<br>'
            </div>
            <div class="key enter">
                Enter
            </div>
            <div class="key shift shiftLeft">
                Shift
            </div>
            <div class="key letter letRU">
                Z
            </div>
            <div class="key letter letRU">
                X
            </div>
            <div class="key letter letRU">
                C
            </div>
            <div class="key letter letRU">
                V
            </div>
            <div class="key letter letRU">
                B
            </div>
            <div class="key letter letRU">
                N
            </div>
            <div class="key letter letRU">
                M
            </div>
            <div class="key dual letRU">
                < <br>,
            </div>
            <div class="key dual letRU">
                ><br>.
            </div>
            <div class="key dual " id='shiftRus'>
                ?<br>/
            </div>
            <div class="key keyUp">
            ^
        </div>
            <div class="key shift shiftRight">
                Shift
            </div>
            <div class="key ctrl ctrlLeft">
                Ctrl
            </div>
            <div class="key win">
               Win
            </div>
            <div class="key altLeft">
                Alt
            </div>
            <div class="key space">
            </div>
            <div class="key altRight">
                Alt
            </div>
            <div class="key keyLeft">
            < </div>
            <div class="key keyDown">
              v
            </div>
            <div class="key keyRight">
             >
            </div>
            <div class="key ctrl ctrlRight">
                Ctrl
            </div>
        </div>
        <div class="description">
            <div class="operation">Клавиатура создана в операционной системе ${type}</div>
            <div class="switch">Для переключения языка комбинация: левыe ctrl + alt</div>
            </div>
    </div>
    `);
}

const userDeviceArray = [{
  device: 'Android',
  platform: /Android/,
},
{
  device: 'iPhone',
  platform: /iPhone/,
},
{
  device: 'iPad',
  platform: /iPad/,
},
{
  device: 'Symbian',
  platform: /Symbian/,
},
{
  device: 'Windows Phone',
  platform: /Windows Phone/,
},
{
  device: 'Tablet OS',
  platform: /Tablet OS/,
},
{
  device: 'Linux',
  platform: /Linux/,
},
{
  device: 'Windows',
  platform: /Windows NT/,
},
{
  device: 'Macintosh',
  platform: /Macintosh/,
},
];

const platform = navigator.userAgent;

function getPlatform() {
  for (const i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return `Неизвестная платформа!${platform}`;
}

const body = document.querySelector('#body');

body.innerHTML = renderEnBoard(getPlatform());

export {
  renderEnBoard,
};
