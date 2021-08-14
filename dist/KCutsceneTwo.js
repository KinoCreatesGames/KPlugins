/** ============================================================================
 *
 *  KCutsceneTwo.js
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
@plugindesc > A plugin that creates cutscene <KCustomSTwo>.

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
  function core_Amaryllis_lerp(start, end, amount) {
    return start + (end - start) * amount;
  }
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
  class KCustomCutsceneTwo extends Scene_Base {
    constructor() {
      super();
    }
    initialize() {
      super.initialize()
    }
    create() {
      super.create()
      this.waitTime = 0
      this.currentCommand = null
      this.commandStepList = []
      this.startPartOne = false
      this.startPartTwo = false
      this.startPartThree = false
      this.complete = false
      this.momFade = false
      AudioManager.stopBgm()
      this.startFadeIn(240, false)
      this.createBackgrounds()
      this.createCharacters()
      this.createMessageBox()
      this.adjustChildren()
    }
    createBackgrounds() {
      this.sceneBackground = new Sprite()
      this.sceneBackgroundTwo = new Sprite()
      this.sceneBackgroundThree = new Sprite()
      this.sceneBackgroundThreeRail = new Sprite()
      this.starBackground = new Sprite()
      let firstBackground = ImageManager.loadPicture("House_Hallway_408x312")
      let secondBackground = ImageManager.loadPicture("House-Bedroom_408x312")
      let thirdBackground = ImageManager.loadPicture("House_Balcony_408x312")
      let rail = ImageManager.loadPicture("House_Balcony_Abv-Player_408x312")
      let nightSky = ImageManager.loadPicture("Night-Sky_BG")
      this.starBackground.visible = false
      this.sceneBackgroundThree.visible = false
      let _gthis = this
      firstBackground.addLoadListener(function (sceneOneBitmap) {
        _gthis.sceneBackground.bitmap = sceneOneBitmap
        _gthis.scaleSprite(_gthis.sceneBackground)
      })
      secondBackground.addLoadListener(function (sceneTwoBitmap) {
        _gthis.sceneBackgroundTwo.bitmap = sceneTwoBitmap
        _gthis.scaleSprite(_gthis.sceneBackgroundTwo)
      })
      thirdBackground.addLoadListener(function (thirdBack) {
        _gthis.sceneBackgroundThree.bitmap = thirdBack
        _gthis.scaleSprite(_gthis.sceneBackgroundThree)
      })
      nightSky.addLoadListener(function (night) {
        _gthis.starBackground.bitmap = night
        _gthis.scaleSprite(_gthis.starBackground)
      })
      rail.addLoadListener(function (railing) {
        _gthis.sceneBackgroundThreeRail.bitmap = railing
        _gthis.sceneBackgroundThreeRail.visible = false
        _gthis.scaleSprite(_gthis.sceneBackgroundThreeRail)
      })
    }
    createCharacters() {
      this.yula = KCFrames.createSprite("Yula_No-Necklace_51x103", 51, 103)
      this.yula.addAnimation("walk", [0, 1, 2, 3, 4, 5, 6, 7])
      this.yula.addAnimation("idle", [16, 17, 18, 19, 20, 21, 22, 23])
      this.yula.playAnimation("idle", true)
      this.yula.setFPS(10)
      this.yula.x = 528
      this.yula.y = 276
      this.yula.scale.y = 2
      this.yula.scale.x = -2
      this.spaceMom = KCFrames.createSprite("Mom_150x150", 150, 150)
      this.spaceMom.addAnimation("float", [0, 1, 2, 3, 4, 5, 6, 7])
      this.spaceMom.playAnimation("float", true)
      this.spaceMom.setFPS(10)
      this.spaceMom.x = 0
      this.spaceMom.y = 200
      this.spaceMom.scale.y = 2
      this.spaceMom.scale.x = 2
      this.spaceMom.visible = false
      this.amulet = KCFrames.createSprite("Falling-Amulet_102x256")
      this.amulet.addAnimation(
        "falling",
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      )
      this.amulet.setFPS(10)
      this.amulet.x = this.yula.x - 60
      this.amulet.y = this.spaceMom.y
      this.amulet.visible = false
    }
    createMessageBox() {
      this.msgBox = KMessage.createMessageBox(0, 0, 200, 150)
      this.msgBox.pText.style.wordWrapWidth -= 12
      this.msgBox.setFontSize(18)
      this.msgBox.hide()
    }
    adjustChildren() {
      this.addChild(this.starBackground)
      this.addChild(this.sceneBackgroundThree)
      this.addChild(this.sceneBackgroundTwo)
      this.addChild(this.sceneBackground)
      this.addChild(this.yula)
      this.addChild(this.spaceMom)
      this.addChild(this.amulet)
      this.addChild(this.sceneBackgroundThreeRail)
      this.addChild(this.msgBox)
    }
    update() {
      super.update()
      this.processScene()
      this.updateInterpreter()
      this.updateMomFade()
    }
    processScene() {
      if (this._fadeDuration <= 0 && !this.startPartOne) {
        this.startPartOne = true
        this.addSceneOneCommands()
        this.addSceneTwoCommands()
        this.addSceneThreeCommands()
      }
    }
    addSceneOneCommands() {
      let padding = 20
      let momWindowX = 0
      let momWindowY = 0
      let _gthis = this
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(0, _gthis.yula.y - padding - _gthis.msgBox.height)
          momWindowX = _gthis.msgBox.x
          momWindowY = _gthis.msgBox.y
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("spaceMom", "Yula...")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "Uh?")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "...Mom?")
          AudioManager.playBgm({
            name: "JDSherbert - Stargazer OST - Celestial Texture",
            pos: 0,
            pan: 0,
            volume: 50,
            pitch: 100,
          })
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.hide()
          _gthis.startFadeOut(180, false)
          _gthis.startPartTwo = true
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.sceneBackground.visible = false
        },
        waitTime: 30,
      })
    }
    addSceneTwoCommands() {
      let padding = 20
      let momWindowX = 0
      let momWindowY = 0
      let _gthis = this
      this.commandStepList.push({
        fn: function () {
          _gthis.startFadeIn(180, false)
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(0, _gthis.yula.y - padding - _gthis.msgBox.height)
          momWindowX = _gthis.msgBox.x
          momWindowY = _gthis.msgBox.y
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("spaceMom", "Yula...")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "...!")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.hide()
          _gthis.yula.playAnimation("walk", true)
          _gthis.yula.translateTo(_gthis.yula.x - 100, _gthis.yula.y, 0.025)
          _gthis.startFadeOut(180, false)
          _gthis.startPartThree = true
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.sceneBackgroundTwo.visible = false
          _gthis.sceneBackgroundThree.visible = true
          _gthis.starBackground.visible = true
          _gthis.sceneBackgroundThreeRail.visible = true
          _gthis.spaceMom.visible = true
          _gthis.yula.stopTranslation()
          _gthis.yula.x = 528
          _gthis.yula.y = 276
          _gthis.yula.playAnimation("idle", true)
        },
        waitTime: 30,
      })
    }
    addSceneThreeCommands() {
      let padding = 20
      let _gthis = this
      this.commandStepList.push({
        fn: function () {
          _gthis.startFadeIn(180, false)
          _gthis.spaceMom.tint = 0
          _gthis.spaceMom.visible = true
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.spaceMom.x +
              (_gthis.spaceMom.width * _gthis.spaceMom.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.spaceMom.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("spaceMom", "Yula...")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC(
            "yula",
            "Wait...who are you? And... How do you know my name?"
          )
        },
        waitTime: 300,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.spaceMom.x +
              (_gthis.spaceMom.width * _gthis.spaceMom.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.spaceMom.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("spaceMom", "...Come to the star tower...")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "Wait, what? Why?")
        },
        waitTime: 300,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.spaceMom.x +
              (_gthis.spaceMom.width * _gthis.spaceMom.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.spaceMom.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("spaceMom", "There isn't much time left...")
          _gthis.momFade = true
          _gthis.startAmuletFall = true
          _gthis.amulet.visible = true
          _gthis.amulet.playAnimation("falling", false)
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "Wh...what was that")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "Uh...?")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.amulet.visible = false
          _gthis.msgBox.sendMsgC("yula", "A pendant?")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.move(
            _gthis.yula.x +
              (_gthis.yula.width * _gthis.yula.scale.x) / 2 -
              _gthis.msgBox.windowWidth / 2,
            _gthis.yula.y - padding - _gthis.msgBox.height
          )
          _gthis.msgBox.show()
          _gthis.msgBox.sendMsgC("yula", "Who was that?")
        },
        waitTime: 180,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.msgBox.hide()
          _gthis.yula.scale.x = 2
        },
        waitTime: 60,
      })
      this.commandStepList.push({
        fn: function () {
          _gthis.complete = true
          _gthis.fadeOutAll()
          _gthis.popScene()
        },
        waitTime: 30,
      })
    }
    updateInterpreter() {
      if (this.waitTime <= 0) {
        this.currentCommand = this.commandStepList.shift()
        if (this.currentCommand != null) {
          this.currentCommand.fn()
          this.waitTime = this.currentCommand.waitTime
        }
      } else {
        this.waitTime--
      }
    }
    updateMomFade() {
      if (this.momFade) {
        this.spaceMom.opacity -= 2
      }
    }
  }

  $hx_exports["KCustomCutsceneTwo"] = KCustomCutsceneTwo
  KCustomCutsceneTwo.__name__ = true
  class KCutsceneTwo {
    static main() {
      let _this = $plugins
      let _g = []
      let _g1 = 0
      while (_g1 < _this.length) {
        let v = _this[_g1]
        ++_g1
        if (new EReg("<KCustomSTwo>", "ig").match(v.description)) {
          _g.push(v)
        }
      }
      KCutsceneTwo.Params = {}
    }
    static gotoCustomScene() {
      SceneManager.push(KCustomCutsceneTwo)
    }
  }

  $hx_exports["KCutsceneTwo"] = KCutsceneTwo
  KCutsceneTwo.__name__ = true
  class kframes_KFrameSprite extends Sprite {
    constructor(bitmap, frameWidth, frameHeight) {
      if (frameHeight == null) {
        frameHeight = 48
      }
      if (frameWidth == null) {
        frameWidth = 48
      }
      super(bitmap);
      this.frameWidth = frameWidth
      this.frameHeight = frameHeight
      this.frameIndex = 0
      this.looping = false
      this.setFPS(6)
      this.animations = new haxe_ds_StringMap()
      if (this._frame != null) {
        this.setFrame(
          this._frame.x,
          this._frame.y,
          this.frameWidth,
          this.frameHeight
        )
      }
    }
    update() {
      super.update()
      this.updateTranslation()
      this.updateAnimationFrames()
    }
    updateTranslation() {
      if (this.destinationX != null || this.destinationY != null) {
        if (this.destinationX != this.x || this.destinationY != this.y) {
          this.x = core_Amaryllis_lerp(
            this.x,
            this.destinationX,
            this.translationAmount
          )
          this.y = core_Amaryllis_lerp(
            this.y,
            this.destinationY,
            this.translationAmount
          )
        }
      }
    }
    stopTranslation() {
      this.destinationX = null
      this.destinationY = null
    }
    updateAnimationFrames() {
      if (this.isPlaying) {
        if (this.frameWait <= 0) {
          this.frameWait = this.frameAmount
          if (this.animations != null) {
            let frames = this.animations.h[this.currentAnimName]
            if (this.frameIndex == frames.length && !this.looping) {
              this.isPlaying = false
            }
            this.frameIndex %= frames.length
            this.setCurrentFrame(frames[this.frameIndex])
            this.frameIndex++
          }
        } else {
          this.frameWait--
        }
      }
    }
    setCurrentFrame(frameNumber) {
      let columns = Math.floor(this.bitmap.width / this.frameWidth)
      this.setFrame(
        Math.min(
          Math.max(this.frameWidth * (frameNumber % columns), 0),
          3000000
        ),
        this.frameHeight * Math.floor(frameNumber / columns),
        this.frameWidth,
        this.frameHeight
      )
    }
    setFrameWidth(width) {
      this.frameWidth = width
      this.setFrame(
        this._frame.x,
        this._frame.y,
        this.frameWidth,
        this._frame.height
      )
      return this;
    }
    setFrameHeight(height) {
      this.frameHeight = height
      this.setFrame(
        this._frame.x,
        this._frame.y,
        this._frame.width,
        this.frameHeight
      )
      return this;
    }
    changeBitmap(bitmap) {
      this.bitmap = bitmap
      return this;
    }
    addAnimation(animationName, frames) {
      this.animations.h[animationName] = frames
      return this;
    }
    playAnimation(animationName, loop) {
      this.currentAnimName = animationName
      this.isPlaying = true
      this.looping = loop
      return this;
    }
    setFPS(fps) {
      this.frameSpeed = fps
      this.frameAmount = Math.ceil(60 / this.frameSpeed)
      this.frameWait = this.frameAmount
      return this;
    }
    translateTo(x, y, translationAmount) {
      this.destinationX = x
      this.destinationY = y
      this.translationAmount = translationAmount
      return this;
    }
    stop() {
      this.isPlaying = false
      this.looping = false
    }
  }

  kframes_KFrameSprite.__name__ = true
  class KCFrames {
    static main() {
      let _this = $plugins
      let _g = []
      let _g1 = 0
      while (_g1 < _this.length) {
        let v = _this[_g1]
        ++_g1
        if (new EReg("<KCFrames>", "ig").match(v.description)) {
          _g.push(v)
        }
      }
      KCFrames.Params = {}
    }
    static params() {
      return KCFrames.Params;
    }
    static createSprite(path, frameWidth, frameHeight) {
      if (frameHeight == null) {
        frameHeight = 48
      }
      if (frameWidth == null) {
        frameWidth = 48
      }
      return new kframes_KFrameSprite(
        ImageManager.loadPicture(path),
        frameWidth,
        frameHeight
      )
    }
    static addToScene(kframeSprite) {
      SceneManager._scene.addChild(kframeSprite)
      return kframeSprite;
    }
  }

  $hx_exports["KCFrames"] = KCFrames
  KCFrames.__name__ = true
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
  KCustomCutsceneTwo.DEFAULT_WAIT_TIME = 180
  KCFrames.listener = new PIXI.utils.EventEmitter()
  KCFrames.KFrameSprite = kframes_KFrameSprite
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
  KCutsceneTwo.main()
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
