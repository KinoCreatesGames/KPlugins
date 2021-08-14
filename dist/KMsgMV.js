/** ============================================================================
 *
 *  KMsgMV.js
 * 
 *  Build Date: 8/14/2021
 * 
 *  Made with LunaTea -- Haxe
 *
 * =============================================================================
*/
// Generated by Haxe 4.2.1+bf9ff69
/*:
@author  KinoCreates - Kino
@plugindesc > A plugin that adds a pixi graphics  message window for your game <KMsg>.

@target MV MZ


@help
==== How To Use ====


MIT License
Copyright (c) 2021 KinoCreates
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
*/

(function ($hx_exports, $global) {
  "use strict"
  var $estr = function () {
      return js_Boot.__string_rec(this, "");
    },
    $hxEnums = $hxEnums || {}
  class EReg {
    constructor(r, opt) {
      this.r = new RegExp(r, opt.split("u").join(""))
    }
    match(s) {
      if (this.r.global) {
        this.r.lastIndex = 0
      }
      this.r.m = this.r.exec(s)
      this.r.s = s
      return this.r.m != null;
    }
  }

  EReg.__name__ = true
  class Lambda {
    static exists(it, f) {
      let x = $getIterator(it)
      while (x.hasNext())
        if (f(x.next())) {
          return true;
        }
      return false;
    }
  }

  Lambda.__name__ = true
  Math.__name__ = true
  class haxe_ds_StringMap {
    constructor() {
      this.h = Object.create(null)
    }
  }

  haxe_ds_StringMap.__name__ = true
  class haxe_iterators_ArrayIterator {
    constructor(array) {
      this.current = 0
      this.array = array
    }
    hasNext() {
      return this.current < this.array.length;
    }
    next() {
      return this.array[this.current++];
    }
  }

  haxe_iterators_ArrayIterator.__name__ = true
  class js_Boot {
    static __string_rec(o, s) {
      if (o == null) {
        return "null";
      }
      if (s.length >= 5) {
        return "<...>";
      }
      let t = typeof o
      if (t == "function" && (o.__name__ || o.__ename__)) {
        t = "object"
      }
      switch (t) {
        case "function":
          return "<function>";
        case "object":
          if (o.__enum__) {
            let e = $hxEnums[o.__enum__]
            let con = e.__constructs__[o._hx_index]
            let n = con._hx_name
            if (con.__params__) {
              s = s + "\t"
              return (
                n +
                "(" +
                (function ($this) {
                  var $r
                  let _g = []
                  {
                    let _g1 = 0
                    let _g2 = con.__params__
                    while (true) {
                      if (!(_g1 < _g2.length)) {
                        break
                      }
                      let p = _g2[_g1]
                      _g1 = _g1 + 1
                      _g.push(js_Boot.__string_rec(o[p], s))
                    }
                  }
                  $r = _g
                  return $r;
                })(this).join(",") +
                ")"
              )
            } else {
              return n;
            }
          }
          if (o instanceof Array) {
            let str = "["
            s += "\t";
            let _g = 0
            let _g1 = o.length
            while (_g < _g1) {
              let i = _g++
              str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i], s);
            }
            str += "]";
            return str;
          }
          let tostr
          try {
            tostr = o.toString
          } catch (_g) {
            return "???";
          }
          if (
            tostr != null &&
            tostr != Object.toString &&
            typeof tostr == "function"
          ) {
            let s2 = o.toString()
            if (s2 != "[object Object]") {
              return s2;
            }
          }
          let str = "{\n"
          s += "\t";
          let hasp = o.hasOwnProperty != null
          let k = null
          for (k in o) {
            if (hasp && !o.hasOwnProperty(k)) {
              continue
            }
            if (
              k == "prototype" ||
              k == "__class__" ||
              k == "__super__" ||
              k == "__interfaces__" ||
              k == "__properties__"
            ) {
              continue
            }
            if (str.length != 2) {
              str += ", \n";
            }
            str += s + k + " : " + js_Boot.__string_rec(o[k], s);
          }
          s = s.substring(1)
          str += "\n" + s + "}";
          return str;
        case "string":
          return o;
        default:
          return String(o);
      }
    }
  }

  js_Boot.__name__ = true
  class KMsgBox extends PIXI.Graphics {
    constructor(x, y, width, height) {
      if (height == null) {
        height = 100
      }
      if (width == null) {
        width = 100
      }
      if (y == null) {
        y = 0
      }
      if (x == null) {
        x = 0
      }
      super();
      this.x = x
      this.y = y
      this.windowWidth = width
      this.windowHeight = height
      // Defaults to black 
      this.bgColor = 0
      // Defaults to white 
      this.borderColor = 16777215
      this.borderSize = 4
      this.bgAlpha = 1
      this.text = ""
      this.fontColor = 16777215
      this.fontSize = 16
      this.align = "left"
      this.cornerRadius = 10
      this.textTime = 5
      this.textTimer = this.textTime
      this.character = ""
      this.vowelFrameWait = 0
      this.pText = new PIXI.Text(this.text, {
        fontSize: this.fontSize,
        fill: this.fontColor,
        align: this.align,
        wordWrap: true,
        wordWrapWidth: width,
      })
      this.padding = 4
      this.pText.y = this.borderSize + this.padding
      this.pText.x = this.borderSize + this.padding
      this.pText.text = ""
      this.starIndicator = new PIXI.Graphics()
      let starPadding = this.padding + 20 + this.borderSize
      this.starIndicator.x = this.windowWidth - starPadding
      this.starIndicator.y = this.windowHeight - starPadding
      this.tilingBackground = new TilingSprite(
        new Bitmap(this.windowWidth, this.windowHeight)
      )
      this.tilingBackground.x = this.borderSize
      this.tilingBackground.y = this.borderSize
      this.addChild(this.tilingBackground)
      this.addChild(this.starIndicator)
      this.addChild(this.pText)
      this.drawMessageBox()
      this.emit("createWindow", this)
    }
    sendMsg(msg) {
      this.text = msg
      this.pText.text = ""
      this.starIndicator.visible = false
      this.emit("sendMsg", this, msg)
      this.character = ""
      this.previousVowel = null
    }
    sendMsgC(charName, msg) {
      this.sendMsg(msg)
      this.character = charName.toLowerCase()
    }
    drawMessageBox() {
      this.clear()
      this.drawBorder()
      this.drawBackground()
      this.drawTilingBackground()
      this.drawIndicatorStar()
    }
    drawBorder() {
      this.beginFill(this.borderColor, 1)
      this.drawRoundedRect(
        0,
        0,
        this.windowWidth,
        this.windowHeight,
        this.cornerRadius
      )
      this.endFill()
      return this;
    }
    drawBackground() {
      this.beginFill(this.bgColor, this.bgAlpha)
      this.drawRoundedRect(
        this.borderSize,
        this.borderSize,
        this.windowWidth - this.borderSize * 2,
        this.windowHeight - this.borderSize * 2,
        this.cornerRadius
      )
      this.endFill()
      return this;
    }
    drawTilingBackground() {
      let starGraphic = new PIXI.Graphics()
      starGraphic.beginFill(1710618, 0.75)
      let starCount = Math.floor(this.windowWidth / 20)
      let starRows = Math.floor(this.windowHeight / 20)
      let starSpacing = 20
      let _g = 1
      let _g1 = starCount
      while (_g < _g1) {
        let i = _g++
        let _g1 = 0
        let _g2 = starRows
        while (_g1 < _g2) {
          let y = _g1++
          starGraphic.drawStar(i * starSpacing, y * starSpacing, 5, 10, 5, 0)
        }
      }
      starGraphic.endFill()
      let renderer = Graphics.app.renderer
      let texture = renderer.generateTexture(
        starGraphic,
        PIXI.SCALE_MODES.DEFAULT,
        1
      )
      let canvas = renderer.extract.canvas(texture)
      let padding = 4
      texture.destroy(true)
      this.tilingBackground.bitmap = new Bitmap(
        this.windowWidth - (this.borderSize * 2 + padding),
        this.windowHeight - (this.borderSize * 2 + padding)
      )
      let bitmap = this.tilingBackground.bitmap
      bitmap.context.drawImage(canvas, 0, 0)
      bitmap.baseTexture.update()
      this.tilingBackground.move(
        this.borderSize * 2,
        this.borderSize * 2,
        bitmap.width,
        bitmap.height
      )
    }
    drawIndicatorStar() {
      this.starIndicator.clear()
      this.starIndicator.beginFill(16777215, 1)
      this.starIndicator.drawStar(0, 0, 5, 10, 5, 0)
      this.starIndicator.endFill()
      let starPadding = this.padding + 20 + this.borderSize
      this.starIndicator.x = this.windowWidth - starPadding
      this.starIndicator.y = this.windowHeight - starPadding
    }
    update() {
      this.updateTilingBackground()
      this.updateTextToRender()
    }
    updateTilingBackground() {
      this.tilingBackground.origin.y -= 0.64
      this.tilingBackground.origin.x += 0.64;
    }
    updateTextToRender() {
      if (this.textTimer <= 0) {
        this.textTimer = this.textTime
        this.pText.text = this.text.substring(0, this.pText.text.length + 1)
        if (this.character != null || this.character.length > 0) {
          this.sendVowelSound(
            this.pText.text.charAt(this.pText.text.length - 1)
          )
        }
      }
      if (this.text != this.pText.text) {
        this.textTimer--
      } else {
        if (!this.starIndicator.visible) {
          this.emit("endMsg")
        }
        this.starIndicator.visible = true
      }
    }
    sendVowelSound(character) {
      let _gthis = this
      let charVowel = character.toUpperCase()
      let baseAudioParams = {
        pitch: 100,
        pan: 0,
        pos: 0,
        volume: 40,
        name: "",
      }
      let _g = []
      let _g1 = 0
      let _g2 = ["A", "E", "I", "O", "U"]
      while (_g1 < _g2.length) {
        let v = _g2[_g1]
        ++_g1
        if (v != _gthis.previousVowel) {
          _g.push(v)
        }
      }
      let temp = _g
      let result = temp[Math.floor(temp.length * Math.random())]
      switch (result) {
        case "A":
          let vowel = KMsgBox.VOCAL_DIC.h[this.character].A
          baseAudioParams.name = "Vocals" + "/" + this.character + "/" + vowel
          break
        case "E":
          let vowel1 = KMsgBox.VOCAL_DIC.h[this.character].E
          baseAudioParams.name = "Vocals" + "/" + this.character + "/" + vowel1
          break
        case "I":
          let vowel2 = KMsgBox.VOCAL_DIC.h[this.character].I
          baseAudioParams.name = "Vocals" + "/" + this.character + "/" + vowel2
          break
        case "O":
          let vowel3 = KMsgBox.VOCAL_DIC.h[this.character].O
          baseAudioParams.name = "Vocals" + "/" + this.character + "/" + vowel3
          break
        case "U":
          let vowel4 = KMsgBox.VOCAL_DIC.h[this.character].U
          baseAudioParams.name = "Vocals" + "/" + this.character + "/" + vowel4
          break
      }

      let availableSe = Lambda.exists(AudioManager._seBuffers, function (se) {
        if (!se.isPlaying()) {
          return se.name == baseAudioParams.name;
        } else {
          return false;
        }
      })
      if (baseAudioParams.name.length > 0 && this.vowelFrameWait <= 0) {
        AudioManager.playSe(baseAudioParams)
        this.previousVowel = result
        this.vowelFrameWait = 1
      } else {
        this.vowelFrameWait--
      }
    }
    setBgColor(color) {
      this.bgColor = color
      this.drawMessageBox()
      return this;
    }
    setFontSize(size) {
      this.fontSize = size
      this.pText.style.fontSize = size
      return this;
    }
    setFontColor(color) {
      this.fontColor = color
      this.pText.style.fill = color
      return this;
    }
    move(x, y) {
      this.x = x != null ? x : this.x
      this.y = y != null ? y : this.y
      return this;
    }
    setXY(x, y) {
      this.x = x
      this.y = y
      return this;
    }
    setWindowWidth(width) {
      this.windowWidth = width
      this.pText.style.wordWrapWidth =
        this.windowWidth - (this.borderSize * 2 + this.padding)
      this.drawMessageBox()
      return this;
    }
    setWindowHeight(height) {
      this.windowHeight = height
      this.drawMessageBox()
      return this;
    }
    setDimensions(width, height) {
      this.windowWidth = width
      this.windowHeight = height
      this.pText.style.wordWrapWidth =
        this.windowWidth - (this.borderSize * 2 + this.padding)
      this.drawMessageBox()
      return this;
    }
    setBorderColor(color) {
      this.borderColor = color
      this.drawMessageBox()
      return this;
    }
    clear() {
      return super.clear();
    }
    hide() {
      this.visible = false
      this.emit("hideWindow", this)
      return this;
    }
    show() {
      this.visible = true
      this.emit("showWindow", this)
      return this;
    }
  }

  $hx_exports["KMsgBox"] = KMsgBox
  KMsgBox.__name__ = true
  class KMessage {
    static main() {
      let _this = $plugins
      let _g = []
      let _g1 = 0
      while (_g1 < _this.length) {
        let v = _this[_g1]
        ++_g1
        if (new EReg("<KMsg>", "ig").match(v.description)) {
          _g.push(v)
        }
      }
    }
    static createMessageBox(x, y, width, height) {
      return new KMsgBox(x, y, width, height);
    }
  }

  $hx_exports["KMessage"] = KMessage
  KMessage.__name__ = true

  function $getIterator(o) {
    if (o instanceof Array) return new haxe_iterators_ArrayIterator(o);
    else return o.iterator();
  }
  {
    String.__name__ = true
    Array.__name__ = true
  }
  js_Boot.__toStr = {}.toString
  KMsgBox.VOCAL_PATH = "Vocals"
  KMsgBox.VOCAL_DIC = (function ($this) {
    var $r
    let _g = new haxe_ds_StringMap()
    _g.h["haley"] = {
      A: "JDSherbert - Vocals - [Stargazer] Haley A",
      I: "JDSherbert - Vocals - [Stargazer] Haley I",
      E: "JDSherbert - Vocals - [Stargazer] Haley E",
      O: "JDSherbert - Vocals - [Stargazer] Haley O",
      U: "JDSherbert - Vocals - [Stargazer] Haley U",
    }
    _g.h["dad"] = {
      A: "JDSherbert - Vocals - [Stargazer] Dad A",
      I: "JDSherbert - Vocals - [Stargazer] Dad I",
      E: "JDSherbert - Vocals - [Stargazer] Dad E",
      O: "JDSherbert - Vocals - [Stargazer] Dad O",
      U: "JDSherbert - Vocals - [Stargazer] Dad U",
    }
    _g.h["yula"] = {
      A: "JDSherbert - Vocals - [Stargazer] Yula A",
      E: "JDSherbert - Vocals - [Stargazer] Yula E",
      I: "JDSherbert - Vocals - [Stargazer] Yula I",
      O: "JDSherbert - Vocals - [Stargazer] Yula O",
      U: "JDSherbert - Vocals - [Stargazer] Yula U",
    }
    _g.h["spacemom"] = {
      A: "JDSherbert - Vocals - [Stargazer] SpaceMom A",
      E: "JDSherbert - Vocals - [Stargazer] SpaceMom E",
      I: "JDSherbert - Vocals - [Stargazer] SpaceMom I",
      O: "JDSherbert - Vocals - [Stargazer] SpaceMom O",
      U: "JDSherbert - Vocals - [Stargazer] SpaceMom U",
    }
    _g.h["basic"] = {
      A: "JDSherbert - Vocals - [Stargazer] Basic Female A",
      E: "JDSherbert - Vocals - [Stargazer] Basic Female E",
      I: "JDSherbert - Vocals - [Stargazer] Basic Female I",
      O: "JDSherbert - Vocals - [Stargazer] Basic Female O",
      U: "JDSherbert - Vocals - [Stargazer] Basic Female U",
    }
    $r = _g
    return $r;
  })(this)
  KMsgBox.STAR_RADIUS = 10
  KMsgBox.TEXT_FRAMETIME = 5
  KMsgBox.VOWEL_WAIT = 1
  KMessage.main()
})(
  typeof exports != "undefined"
    ? exports
    : typeof window != "undefined"
    ? window
    : typeof self != "undefined"
    ? self
    : this,
  {}
)
