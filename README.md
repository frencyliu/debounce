# Simple Debounce

the callback won't exec more than once during time interval 

```debounce (callback, delay, ...args)```

1. ```callback``` your custom callback

2. ```delay``` the time intervel in minisecond

3. ```args``` the args used in your callback


## Usage

Basic

```debounce(customCallback, 1000)```

---

With arguments

```debounce(customCallback, 1000, arg1, arg2 ... )```
