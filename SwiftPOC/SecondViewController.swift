//
//  SecondViewController.swift
//  SwiftPOC
//
//  Created by Pavnish Kumar Rana on 17/05/24.
//

import UIKit

class SecondViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    
    @IBAction func onTapped(_ sender: UIButton) {
        navigationController?.popViewController(animated: true)
    }
    
}
