//
//  ViewController.swift
//  SwiftPOC
//
//  Created by Pavnish Kumar Rana on 17/05/24.
//

import UIKit
import React


class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func onTapped(_ sender: UIButton) {
        NSLog("Hello")
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        let rootView = RNViewManager.sharedInstance.viewForModule(
                   "RNHighScores",
                   initialProperties: mockData as? [String : Any]
                                        )
               
               let reactNativeVC = UIViewController()
               reactNativeVC.view = rootView
               reactNativeVC.modalPresentationStyle = .fullScreen
               present(reactNativeVC, animated: true,completion: nil)
    }
    
}

