<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "sef".
 *
 * @property int $id
 * @property string $link
 * @property int $parent_id_catalog
 * @property int $parent_id_gallery
 * @property string $link_sef
 */
class Sef extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'sef';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['parent_id_catalog', 'parent_id_gallery'], 'integer'],
            [['link_sef'], 'required'],
            [['link', 'link_sef'], 'string', 'max' => 255],
            [['link_sef'], 'unique'],
            [['link'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'link' => 'Link',
            'parent_id_catalog' => 'Parent Id Catalog',
            'parent_id_gallery' => 'Parent Id Gallery',
            'link_sef' => 'Link Sef',
        ];
    }
}
