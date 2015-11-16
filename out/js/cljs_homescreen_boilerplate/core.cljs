(ns cljs-homescreen-boilerplate.core

  (:require
    [clojure.string :as string]
    [goog.dom :as dom]
    [promesa.core :as p]
  )
  )

; constants
(def apps (.getElementById js/document "apps"))
(def iconmap (js* "new WeakMap();"))


; Renders the icon to the container.
(defn render [e]
    (let [tile (.createElement js/document "div")]
      (.className tile "tile")

      ;(tile.style.background (str "url("  (aget "120" (.icons e)) ") center/90% no-repeat"))
      (.appendChild apps tile)
      (.set iconmap tile e)
      )
  )

;Fetch all apps and render them.


  (def pr (-> (p/promise (.getAll js/window.navigator.mozApps.mgmt))
          (p/then (fn [values]
            (doseq [v values]
              (js/console.log v.manifest)
              (render v.manifest)
                )))))


;(.info js/console (.getAll js/window.navigator.mozApps.mgmt))
;(let [apps (.getAll js/window.navigator.mozApps.mgmt)]
;  (.info js/console apps))

