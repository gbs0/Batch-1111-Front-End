import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed"
export default class extends Controller {
  static targets = ["h1", "p"]
  
  connect() {
    new Typed(this.h1Target, {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    })

    new Typed(this.pTarget, {
      strings: ["Change your life", "learn to code at one of our campuses around the world."],
      typeSpeed: 50,
      loop: true
    })
  }
}
