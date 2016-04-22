package com.intuiture.ex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TemplateController {// Serves Templates.

	@RequestMapping(value = "/home")
	public String getMainTemplate() {
		return "template/home";
	}

	@RequestMapping(value = "/footer")
	public String footer() {
		return "template/footer";
	}

}
