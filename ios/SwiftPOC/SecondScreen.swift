//
//  ViewController.swift
//  SwiftPOC
//
//  Created by Pavnish Kumar Rana on 17/05/24.
//

import UIKit
import React

//
class SecondScreen: UIViewController {
    var name: String?
    @IBOutlet weak var textLabel: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        print(name ?? "" )
        textLabel.text = name
    }

    @IBAction func onBackPress(_ sender: Any) {
        dismiss(animated: true)
    }
    
}


