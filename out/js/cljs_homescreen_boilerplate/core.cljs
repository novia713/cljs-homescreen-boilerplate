; ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
; = FirefoxOS Homescreen Boilerplate =
; ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
; === leandro@leandro.org 20151116 ===
; ===  Homescreens for the masses  ===


;  === TODO ===
; exclude only apps with this role ["system", "input", "homescreen", "theme"]
; install/unistall



(ns cljs-homescreen-boilerplate.core
  (:require
    [clojure.string :as string]
    [goog.dom :as dom]
    [promesa.core :as p]))

; constants
(def apps (.getElementById js/document "apps"))
(def to-exclude ["system" "input" "homescreen" "theme"])

(def random-color
  (let [x (* (rand-int 9) 16777215)]
     (str x)))

(defn get-bigger-icon [icons]
    ;(goog.object/forEach icons
    ; (fn [val key icons]
    ;    (js/console.log key)))

    (last (clj->js (last (js->clj icons)))))

(defn role-acceptable [e]
  (if (= "Callscreen" e.name)
   -1
    (.indexOf (to-array to-exclude) e.role)
  ))

; Renders the icon to the container like

(defn render [e]



  (js/console.log e.name " → " e.role " → " (role-acceptable e))
  (if (> 0 (role-acceptable e))
   (do
    (let [tile (.createElement js/document "DIV") link (.createElement js/document "A")]
      ;(set! (.-innerHTML tile) e.name) ;uncomment to display the app name
      ;(set! (.-className tile) e.role)
      (set! (.-className tile) "tile")

      (set! (.-background (.-style tile)) (apply str "orange url(" e.origin (get-bigger-icon e.icons) ") center/99% no-repeat"))
      (set! (.-href link) (apply str e.origin e.launch_path))
      (.appendChild link tile)
      (if-not (empty? e.origin)
        (.appendChild apps link))))))



;Fetch all apps and render them.

(def pr (-> (p/promise (.getAll js/window.navigator.mozApps.mgmt))
  (p/then (fn [values]
    (doseq [v values]
      (render v.manifest))))))
