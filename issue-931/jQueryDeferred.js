;
    
    var Robot = {};
    
    /**
     * @define {boolean}
     */
    Robot.ENABLE_DEBUGGING = false;

    ;
    
    var JSTypes = {};
    
    /** @type {function():string} */
    var toString = Object.prototype.toString;
    
    // @see https://developer.mozilla.org/web-tech/2010/07/26/determining-with-absolute-accuracy-whether-or-not-a-javascript-object-is-an-array/
    var SUPPORTS_ISARRAY = "isArray" in Array;
    
    /**
     * Using this method gives better minifying results, because typeof cannot be
     * minified. On the other hand, something like Closure compiler can inline it.
     * 
     * Using these methods for cross browser compatibility a good idea as well.
     * 
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isString = function isString(obj)
    {
        return typeof obj === "string";
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isNumber = function isNumber(obj)
    {
        return typeof obj === "number";
    };

    /**
     * Would this implementation be faster than return typeof obj === "boolean"?
     * 
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isBoolean = function isBoolean(obj)
    {
        return obj === true || obj === false;
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isNull = function isNull(obj)
    {
        return obj === null;
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isFunction = function isFunction(obj)
    {
        return typeof obj === "function";
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isUndefined = function isUndefined(obj)
    {
        return obj === undefined;
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isDate = function isDate(obj)
    {
        // FIXME: Checking instance of doesn't work cross-window:
        return typeof obj === 'object' && obj !== null && obj instanceof Date;
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isNaN = function isNaN(obj)
    {
        return typeof obj === 'number' && isNaN(obj);
        
        // TODO: Would this work as well, and perhaps faster?
        // return obj !== obj;
    };

    /**
     * First checks the fast way (instanceof), then the slow way (Object.prototype.toString) that works cross-window:
     * 
     * > http://bugs.dojotoolkit.org/ticket/5334
     * > Testing for "instanceof Array" does not work across page boundaries (iframe-to-iframe)
     * Kris Zyp notes that this method should work for Array subclasses as well.
     * 
     * > http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
     * > `instanceof` considered harmful (or how to write a robust `isArray`)
     * 
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isArray = function isArray(obj)
    {
        return obj instanceof Array || typeof obj === "object" && toString.call(obj) === '[object Array]';
    };
    
    if (SUPPORTS_ISARRAY)
    {
        JSTypes.isArray = Array.isArray;
    }

    /**
     * 
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isRegExp = function isRegExp(obj)
    {
        return obj instanceof RegExp || typeof obj === "object" && toString.call(obj) === '[object RegExp]';
    };

    /**
     * @param  {*} obj
     * @return {boolean}
     */
    JSTypes.isObject = function isObject(obj)
    {
        return obj !== null && typeof obj === 'object';
    };
    
    ;
    
    var List = {};

    List.isArray = JSTypes.isArray;

    /**
     * @param  {Array} arr
     * @param  {*} obj
     * @param  {number=} offset
     * @return {number}
     */
    List.indexOf = function (arr, obj, offset)
    {
        return arr.indexOf(obj, offset);
    };
    
    if (!("indexOf" in Array.prototype))
    {
        /**
         * @param  {Array} arr
         * @param  {*} obj
         * @param  {number=} offset
         * @return {number}
         * @suppress {duplicate}
         */
        List.indexOf = function (arr, obj, offset)
        {
            for (var i = offset || 0, l = arr.length; i < l; i++)
            {
                if (arr[i] === obj)
                    return i;
            }
            return -1;
        };
    }

    /**
     * @param  {Array} arr
     * @param  {*} obj
     * @return {boolean}
     */
    List.contains = function (arr, obj)
    {
        return List.indexOf(arr, obj) !== -1;
    };
    
    /**
     * @param  {Array} arr
     * @return {Array}
     */
    List.dense = function (arr)
    {
        /**
         * @param {*} arg
         */
        return List.filter(arr, null, function (arg) {
            return arg !== undefined;
        });
    };

    /**
     * @param {Array.<*>} arr
     * @return {*}
     */
    List.last = function last(arr)
    {
        return arr[arr.length - 1];
    };
    
    /**
     * @param  {Array} arr
     * @param  {*} item
     */
    List.remove = function (arr, item)
    {
        var index = List.indexOf(arr, item);
        if (index != -1)
            arr.splice(index, 1);
    };

    /**
     * @param  {Array} arr
     * @param  {*} item
     */
    List.removeAll = function (arr, item)
    {
        // TODO
    };
    
    /**
     * @param  {Array} arr
     */
    List.clear = function (arr)
    {
        arr.splice(0, arr.length);
    };
    
    /**
     * Append arr2 to arr
     * 
     * @param  {Array} arr
     * @param  {Array} arr2
     */
    List.appendArray = function append(arr, arr2)
    {
        // FIXME: apply will fail for a very large arr2.
        // The maximum number of arguments will be exceeded.
        arr.push.apply(arr, arr2);
    };
    
    /**
     * Keys become values, and values become keys.
     * See: http://php.net/manual/en/function.array-flip.php
     * 
     * @param {Array.<*>} arr
     * @return {Object}
     */
    List.flip = function (arr)
    {
        var value,
            i = 0,
            l = arr.length,
            flipped = {};
        
        for (; i < l; i++)
        {
            value = arr[i];
            
            if (typeof value === "string" || typeof value === "number")
            {
                flipped[value] = i;
            }
        }
        
        return flipped;
    };
    
    /**
     * @param {Array.<*>} arr
     * @return {Array.<*>}
     */
    List.clone = function (arr)
    {
        return [].concat(arr);
    };

    /**
     * [CC] TODO @param {(function(*, number, Array): *)|((function(*, number): *)|(function(*): *))} fn
     *
     * @param {Array} arr
     * @param {!*} thisObj
     * @param {Function} fn
     */
    List.forEach = function (arr, thisObj, fn)
    {
        var i = 0;

        // Prevent infinite loop when length is Infinity
        var l = arr.length >>> 0;

        for (; i < l; i++)
        {
            if (i in arr)
            {
                fn.call(thisObj, arr[i], i, arr)
            }
        }
    };

    /**
     * [CC] TODO _param {(function(*, number, Array): *)|((function(*, number): *)|(function(*): *))} fn
     *
     * @param {Array} arr
     * @param {!*} thisObj
     * @param {Function} fn
     * @return {Array}
     */
    List.map = function (arr, thisObj, fn)
    {
        var i = 0,
            out = [];

        // Prevent infinite loop when length is Infinity
        var l = arr.length >>> 0;
        
        for (; i < l; i++)
        {
            if (i in arr)
            {
                out[i] = fn.call(thisObj, arr[i], i, arr)
            }
        }

        return out;
    };

    /**
     * [CC] TODO @param {(function(*, number, Array): *)|((function(*, number): *)|(function(*): *))} fn
     * 
     * @param {Array} arr
     * @param {!*} thisObj
     * @param {Function} fn
     * @return {Array}
     */
    List.filter = function (arr, thisObj, fn)
    {
        var i = 0,
            j = 0,
            out = [];

        // Prevent infinite loop when length is Infinity
        var l = arr.length >>> 0;

        for (; i < l; i++)
        {
            if (i in arr)
            {
                if (fn.call(thisObj, arr[i], i, arr))
                {
                    out[j] = arr[i];
                    j++;
                }
            }
        }

        return out;
    };

    /**
     * @param {(Arguments|NamedNodeMap|NodeList)} arg
     * @return {Array}
     */
    List.toArray = function (arg)
    {
        var i = 0, l = arg.length, r = Array(l);
        for(; i < l; i++)
            r[i] = arg[i];
        return r;
    };

    /**
     * @param {Array} arg
     * @param {?*} thisObj
     * @param {Function} callback
     * @return {boolean}
     */
    List.every = function (arg, thisObj, callback)
    {
        for (var i = 0, l = arg.length; i < l; i++)
        {
            if (!callback.call(this, arg[i], i, arg))
                return false;
        }
        return true;
    };

    /**
     * @param {Array} arg
     * @param {?*} thisObj
     * @param {Function} callback
     * @return {boolean}
     */
    List.some = function (arg, thisObj, callback)
    {
        for (var i = 0, l = arg.length; i < l; i++)
        {
            if (callback.call(this, arg[i], i, arg))
                return true;
        }
        return false;
    };

    /**
     * @param {Array} arg
     * @param {Function} accumulator
     * @param {*=} initial
     * @return {*}
     */
    List.reduce = function (arg, accumulator, initial)
    {
        var i = 0,
            l = arg.length >> 0,
            curr;

        if (initial === undefined)
        {
            curr = arg[0];
            i = 1; // start accumulating at the second element
        }
        else
        {
            curr = initial;
        }

        for (;i < l; ++i)
        {
            if (i in arg)
                curr = accumulator.call(undefined, curr, arg[i], i, arg);
        }

        return curr;
    };

    /**
     * @param {Array} arr
     * @return {Array} arr
     */
    List.flatten = function (arr)
    {
        var item, x, k,
            flat = [],
            i = 0,
            out = 0,
            l = arr.length;

        while (i < l)
        {
            item = arr[i];

            if (List.isArray(item))
            {
                item = List.flatten(item);
                x = 0;
                k = item.length;
                while (x < k)
                {
                    flat[out] = item[x];
                    x++;
                    out++;
                }
            }
            else
            {
                flat[out] = item;
                out++;
            }

            i++;
        }
        return flat;
    };
top.list = List
    ;

/**
 * @constructor
 * @see http://promises-aplus.github.com/promises-spec/
 */
function Promise()
{
	// if (Robot.ENABLE_DEBUGGING)
		// this.id = Promise.n++;
	
	this.listeners = [];
	this.errorHandlers = [];
	this.pending = true;
}

/** @typedef {Function} */
Promise.Callback;

/**
 * When true, this promise is unresolved and unrejected.
 * 
 * @private
 * @type {boolean}
 */
Promise.prototype.pending = true;

/**
 * When true, this promise is rejected. When false, this promise is either resolved or empty.
 * 
 * @private
 * @type {boolean}
 */
Promise.prototype.success = false;

/**
 * @private
 * @type {*}
 */
Promise.prototype.reason = undefined;


/**
 * @private
 * @type {*}
 */
Promise.prototype.value = undefined;


/** @type {number} */
// Promise.prototype.id;

/** @type {?Promise} */
Promise.prototype.after = null;


Promise.n = 0;

Promise.rejectQueue = [];

Promise.thenQueue = [];

Promise.allQueue = [];

Promise.tickId = -1;

Promise.recycle = function ()
{
	if (Promise.tickId !== -1)
		clearTimeout(Promise.tickId);

	List.clear(Promise.rejectQueue);
	List.clear(Promise.thenQueue);
};

Promise.tick = function ()
{
	Promise.tickId = -1;

	// Prevent looping over a queue that can be altered
	var queue = Promise.rejectQueue;
	Promise.rejectQueue = [];

	for (var i = 0, l = queue.length; i < l; i++)
	{
		queue[i].sendReject();
	}

	// Prevent looping over a queue that can be altered
	queue = Promise.thenQueue;
	Promise.thenQueue = [];

	for (var i = 0, l = queue.length; i < l; i++)
	{
		queue[i].sendResolve();
	}
};

Promise.requestTick = function ()
{
	if (Promise.tickId == -1)
		Promise.tickId = setTimeout(Promise.tick, 0);
};

/**
 * @param {*} arg
 * @return {boolean}
 */
Promise.isPromise = function (arg)
{
	return arg instanceof Promise;
};

/**
 * @param {Array.<Promise>} promises
 * @return {Promise}
 */
Promise.all = function (promises)
{
	var l = promises.length,
		promise = Promise.defer(),
		desc = {
			countdown: l,
			promise: promise,
			values: []
		};

	for (var i = 0; i < l; i++)
	{
		promises[i].then(
			Promise.createAllHandler(desc, i),
			Promise.createAllErrorHandler(desc, i)
		);
	}

	return promise;
};

Promise.createAllHandler = function (desc, i)
{
	return function (value)
	{
		desc.countdown--;
		desc.values[i] = value;

		if (desc.countdown == 0)
		{
			desc.promise.resolve(desc.values);
		}
	};
};

Promise.createAllErrorHandler = function (desc, i)
{
	return function (reason)
	{
		desc.countdown--;

		desc.promise.fail(reason);
	};
};

/**
 * @private
 * @this {Promise}
 */
Promise._handleAll = function (value)
{
	
};

/**
 * @private
 * @this {Promise}
 */
Promise._handleAllFail = function (reason)
{
	
};

/**
 * @param {Promise} p
 */
Promise.then = function (p)
{
	Promise.thenQueue.push(p);
	Promise.requestTick();
};

/**
 * @param {Promise} p
 */
Promise.reject = function (p)
{
	Promise.rejectQueue.push(p);
	Promise.requestTick();
};

/**
 * @return {Promise}
 */
Promise.defer = function ()
{
	return new Promise();
};

/**
 * @param {Promise} a
 * @param {Promise} b
 */
Promise.couple = function (a, b)
{
	a.then(
		function (value) { b.resolve(value) },
		function (reason) { b.reject(reason); }
	);
};

/**
 * @param {*} reason
 */
Promise.prototype.reject = function (reason)
{
	if (this.pending)
	{
		this.pending = false;
		this.success = false;
		this.reason = reason;
		Promise.reject(this);
	}
};

/**
 * @param {*} value
 */
Promise.prototype.resolve = function (value)
{
	if (this.pending)
	{
		this.pending = false;
		this.success = true;
		this.value = value;
		Promise.then(this);
	}
};

Promise.prototype.sendResolve = function ()
{
	for (var i = 0, l = this.listeners.length; i < l; i++)
	{
		// try
		// {
			var r = this.listeners[i](this.value);

			if (this.after)
			{
				if (Promise.isPromise(r))
				{
					r = (/** @type {Promise} */ r);
					Promise.couple(r, this.after);
				}
				else
				{
					this.after.resolve(r);
				}
			}/*
		}
		catch (e)
		{
			if (Robot.ENABLE_DEBUGGING)
				console.error(e);
			
			if (this.after)
			{
				this.after.reject(e);
			}
		}*/
	}
	this.recycle();
};

Promise.prototype.sendReject = function ()
{
	for (var i = 0, l = this.errorHandlers.length; i < l; i++)
	{
		try
		{
			var r = this.errorHandlers[i](this.reason);

			if (this.after)
			{
				if (Promise.isPromise(r))
				{
					r = (/** @type {Promise} */ r);
					Promise.couple(r, this.after);
				}
				else
				{
					this.after.reject(r);
				}
			}
		}
		catch (e)
		{
			if (Robot.ENABLE_DEBUGGING)
				console.error(e);

			if (this.after)
			{
				this.after.reject(e);
			}
		}
	}
	this.recycle();
};

/**
 *
 */
Promise.prototype.recycle = function ()
{
	List.clear(this.listeners);
	List.clear(this.errorHandlers);
};

/**
 * @private
 * @return {Promise}
 */
Promise.prototype.__chain = function ()
{
	var parent = this,
		p = Promise.defer();

	// p.id = this.id + "/" + p.id;

	function cleanup_closure()
	{
		parent = parent.after = null;
	}

	p.done(cleanup_closure);
	p.fail(cleanup_closure);

	return p;
};

/**
 * @param {Promise.Callback} callback
 * @param {Promise.Callback=} error
 * @return {Promise}
 */
Promise.prototype.then = function (callback, error)
{
	this.done(callback);

	if (error !== undefined)
		this.fail(error);

	if (!this.after)
	{
		// this.after = Promise.defer();
		this.after = this.__chain();
	}

	return this.after;
};

/**
 * @param {Promise.Callback} callback
 */
Promise.prototype.done = function (callback)
{
	if (typeof callback == "function")
	{
		this.listeners.push(callback);

		if (!this.pending)
		{
			if (this.success)
				Promise.then(this);
			else
				Promise.reject(this);
		}
	}
};

/**
 * @param {Promise.Callback} error
 */
Promise.prototype.fail = function (error)
{
	if (typeof error == "function")
	{
		this.errorHandlers.push(error);

		if (!this.pending)
		{
			if (this.success)
				Promise.then(this);
			else
				Promise.reject(this);
		}
	}
};

;
    
    var FunctionUtil = {};
    
    /**
     * @const
     * @type {boolean}
     */
    var SUPPORTS_FUNCTION_BIND = typeof Function.prototype.bind != "undefined";
    
    /**
     * @param {*} thisObj
     * @param {Function} fn
     * @param {Array.<*>=} args
     * @return {Function}
     */
    FunctionUtil.bind = function (thisObj, fn, args)
    {
        var bound;
        
        if (SUPPORTS_FUNCTION_BIND)
        {
            if (!args)
            {
                // Avoid .call() if we can
                bound = fn.bind(thisObj);
            }
            else
            {
                // TODO: store Function.prototype.bind in closure variable
                bound = Function.prototype.bind.apply(fn, [thisObj].concat(args));
            }
        }
        else
        {
            if (!args)
            {
                bound = function () {
                    return fn.apply(thisObj, arguments);
                };
            }
            else
            {
                bound = function () {
                    return fn.apply(thisObj, Array.prototype.concat.apply(args, arguments));
                };
            }
        }
        
        return bound;
    };
    
    ;

/*
Recommended reading for creating a jQuery plugin:
- http://docs.jquery.com/Plugins/Authoring
*/
	/**
	 * @constructor
	 * @extends {jQuery}
	 * @param {Promise} p
	 */
	function jQueryDeferred(p)
	{
		this.__promise = p;
	};

	/**
	 * @param {Promise} promise
	 * @return {jQueryDeferred}
	 */
	function $defer(promise)
	{
		return new jQueryDeferred(promise);
	}

	/**
	 * @private
	 * @type {Promise}
	 */
	jQueryDeferred.prototype.__promise;

	/**
	 * Error handler for all promises created in this plugin.
	 * Pity that the stack trace of these asynchronous errors are so useless.
	 * 
	 * @param {*} e
	 */
	jQueryDeferred.throwError = function (e)
	{
		throw e;
	};

	/**
	 * @param {string} fnName
	 * @return {function():jQueryDeferred}
	 */
	jQueryDeferred.createFn = function (fnName)
	{
		/**
		 * @return {jQueryDeferred}
		 * @this {jQueryDeferred}
		 */
		return function () {
			// if (this.__promise)
			// {
				/** @type {jQueryDeferred} */
				var thisObj = this;

				console.log("This is were arguments originally is defined");
				var args = arguments;

				var p = Promise.defer();
				thisObj.__promise.then(function (value) {
					var set;

					var fn = (/** @type {Function} */ value[fnName]);
					console.log("This is it ends up");
					var r = (/** @type {*} */ fn.apply(value, args));

					if (Promise.isPromise(r))
					{
						r = (/** @type {Promise} */ r);
						// console.log("jQuery method returned a promise :o ", p)
						r.then(FunctionUtil.bind(p, p.resolve), FunctionUtil.bind(p, p.reject));
					}
					else if (r instanceof jQueryDeferred)
					{
						// console.log("jQuery method returned a deferred jQuery object :o ", p);
						r.__promise.then(FunctionUtil.bind(p, p.resolve), FunctionUtil.bind(p, p.reject));
					}
					else
					{
						p.resolve(r);
					}

					// Reset the promise object, act immediately from now on
					// thisObj.__promise = undefined;

					return r;

				}, jQueryDeferred.throwError); // Use throwError as error callback
				return $defer(p);
			// }
			// When the promise is resolved we don't have to wait until the next tick,
			// execute the function immediately.
			// else
			// {
				// return jQuery.fn[key].apply(this, arguments);
			// }
		};
	};

	/**
	 * Copy all methods on the jQuery object to the jQueryDeferred constructor
	 */
	jQueryDeferred.inherit = function ()
	{
		for (var key in jQuery.fn)
		{
			if (jQuery.fn.hasOwnProperty(key) && typeof jQuery.fn[key] == "function")
			{
				jQueryDeferred.prototype[key] = jQueryDeferred.createFn(key);
			}
		}
	}; 

	jQueryDeferred.inherit();

	;