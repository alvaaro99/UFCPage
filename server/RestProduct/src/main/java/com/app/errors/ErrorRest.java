package com.app.errors;

public class ErrorRest {
	
private String message;
	
	public ErrorRest() { }

	public ErrorRest(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


}
