** NODE JS EVENT LOOP

* Thing of node js as a process that never stops
* It`s like a flour machine that never stops 
* you thorw rice- It grinds and give you rice flour 
* You thorw corn - It grinds and give you corn flour 
* It keeps running and does job as FIFO
* The difference is instead of throwing rice or corn
* You thorw events to node process.


** noDE JS ASYNCHRONOUS PROGRAMMING
* asynchronous programming
* node js single threaded non blocking i/o model
* even thought it is singe threaded - it is efficient
* because it uses non-locking event loop 
* and keeps the events in a stack 
* they qill be excuted one by one without waiting for any one of these complete
* instead they will be executed and completed as the process is running other callbacks.

* no esperan son algunos eventos  van a parar las peticiòn a servidoresç
* interacciones visuales,navegaciòn  clientside, los eventos que se realizan cierto tiempo. 

** Secrets of understanding Node js

* JS enviroment browser/server
* understanding functions/ callbacks functions
* Event loop 
* asynchronous (Non-blocking) vs synchronous (bloking)
