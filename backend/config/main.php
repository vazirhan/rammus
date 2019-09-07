<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-backend',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'language' => 'ru',
    'modules' => [

        'db-manager' => [
            'class' => 'bs\dbManager\Module',
            // path to directory for the dumps
            'path' => '@backend/backups',
            // list of registerd db-components
            'dbList' => ['db'],
            'as access' => [
                'class' => 'yii\filters\AccessControl',
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ],
        'utility' => [
            'class' => 'c006\utility\migration\Module',
        ],


        'translate-manager' => [
            'class' => 'wokster\translationmanager\TranslationManager',
            'languages' => ['en','ru','fr'],
        ]
    ],
    'aliases' => [
        '@server' => "http://".$_SERVER['SERVER_NAME'],
        '@catalog' => __DIR__ . '/../../frontend/web/uploads/catalog',
        '@gallery' => '../../frontend/web/uploads/gallery',
        '@crop' => '../../frontend/web/crop',
        '@slider' => __DIR__ . '/../../frontend/web/uploads/slider-home',

    ],
    'components' => [
        'request' => [
            'baseUrl' => '/admin',
            'csrfParam' => '_csrf-backend',
        ],

        'image' => [
            'class' => 'yii\image\ImageDriver',
            'driver' => 'GD',  //GD or Imagick
        ],

        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-backend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the backend
            'name' => 'advanced-backend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                '' => 'site/index',
                '<controller:\w+>/<action:\w+>/' => '<controller>/<action>',

            ],
        ],


        'i18n' => [
            'translations' => [
                'yii*' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@vendor/yiisoft/yii2/messages',
                    'sourceLanguage' => 'en'
                ],
                '*' => [
                    'class' => 'yii\i18n\DbMessageSource',
                    'forceTranslation'=>true,
                    //'enableCaching' => false,
                    //'cachingDuration' => 3600,
                ]
            ],
        ],

    ],
    'controllerMap' => [
        'elfinder' => [
            'class' => 'mihaildev\elfinder\PathController',
            'access' => ['@'],
            'root' => [

                'path' => '/../../frontend/web//uploads/global',
                'name' => 'Global'
            ],
//            'watermark' => [
//                        'source'         => __DIR__.'/logo.png', // Path to Water mark image
//                         'marginRight'    => 5,          // Margin right pixel
//                         'marginBottom'   => 5,          // Margin bottom pixel
//                         'quality'        => 95,         // JPEG image save quality
//                         'transparency'   => 70,         // Water mark image transparency ( other than PNG )
//                         'targetType'     => IMG_GIF|IMG_JPG|IMG_PNG|IMG_WBMP, // Target image formats ( bit-field )
//                         'targetMinPixel' => 200         // Target image minimum pixel size
//            ]
        ]
    ],
    'params' => $params,
];
