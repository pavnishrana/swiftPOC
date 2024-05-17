//
//  ViewController.swift
//  SwiftPOC
//
//  Created by Pavnish Kumar Rana on 17/05/24.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func onTapped(_ sender: UIButton) {
        let viewController = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "SecondViewController")
        guard let viewController = viewController as? SecondViewController else { return }
        navigationController?.pushViewController(viewController, animated: true)
    }
    
}

