
# 0.1.16 (11-13-2019)

* Failures from the API now return a proper error:

```
{
    error: {
        status: 400,                    // HTTP Status Code
        message: "An error occurred",   // Message from the API server
        code: 1001                      // (Optional) API Specific Error Code
    }
}
```