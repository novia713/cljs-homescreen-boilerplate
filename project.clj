(defproject cljs-homescreen-boilerplate "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                [org.clojure/clojure "1.8.0-RC1"]
                [org.clojure/clojurescript "1.7.170"]
                [funcool/promesa "0.5.0"]
                ]
  :plugins [[lein-cljsbuild "1.1.1"]]

  :hooks [leiningen.cljsbuild]
  :clean-targets {:protect false}
  :cljsbuild
    {:builds
     [{:source-paths ["src/cljs_homescreen_boilerplate"] ,
       :compiler
       {
        :optimizations :whitespace
        :output-to "out/js/cljs-homescreen.js"
        :pseudo-names true ;human
        :pretty-print true ;human
        :verbose true      ;debug
        :output-dir "out/js"
        :cache-analysis true
        }}]}

  :main cljs-homescreen-boilerplate.core
  )
